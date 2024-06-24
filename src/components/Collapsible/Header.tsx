import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { defaultCollapsibleElementProps } from "constant";

import { useCollapseContext } from "context";

import { PolymorphicElement, CollapsibleElementProps } from "types";

export const CollapsibleHeader = <T extends PolymorphicElement = "button">(
  props: CollapsibleElementProps<T>
) => {
  const { handleToggle, id, isOpen } = useCollapseContext();

  const allProps = mergeProps(defaultCollapsibleElementProps, props);

  const [ownProps, otherProps] = splitProps(allProps, [
    "as",
    "classList",
    "class",
    "openedClass",
    "closedClass",
  ]);

  const ComponentName = ownProps.as || "button";

  return (
    <Dynamic
      role="button"
      aria-controls={id}
      aria-expanded={isOpen()}
      onClick={handleToggle}
      component={ComponentName}
      class={`border cursor-pointer mb-2 rounded focus-visible:border-red-500 focus-visible:outline-none ${ownProps.class || ""}`}
      classList={{
        [ownProps.openedClass]: isOpen(),
        [ownProps.closedClass]: !isOpen(),
        ...ownProps.classList,
      }}
      {...otherProps}
    />
  );
};
