import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { defaultCollapsibleElementProps } from "constant";

import { useCollapseContext } from "context";

import { CollapsibleElementProps, PolymorphicElement } from "types";

export const CollapsiblePanelViaGrid = <T extends PolymorphicElement>(
  props: CollapsibleElementProps<T>
) => {
  const { isOpen, id } = useCollapseContext();
  const allProps = mergeProps(defaultCollapsibleElementProps, props);


  const [ownProps, otherProps] = splitProps(allProps, [
    "as",
    "classList",
    "class",
    "openedClass",
    "closedClass",
  ]);

  const component = ownProps.as || "div";

  return (
    <div
      id={id}
      class={`overflow-hidden transition-grid-rows duration-500 ease-in-out px-4 rounded grid [&>*]:overflow-hidden ${
        ownProps.class
      }`}
      classList={{
        [`grid-rows-1 ${ownProps.openedClass}`]: isOpen(),
        [`grid-rows-0 ${ownProps.closedClass}`]: !isOpen(),
        ...ownProps.classList,
      }}
      aria-labelledby={id}
    >
      <Dynamic component={component} {...otherProps} />
    </div>
  );
};
