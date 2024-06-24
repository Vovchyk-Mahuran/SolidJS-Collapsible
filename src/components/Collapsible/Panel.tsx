import { createEffect, mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import { defaultCollapsibleElementProps } from "constant";

import { useCollapseContext } from "context";

import { CollapsibleElementProps, PolymorphicElement } from "types";

export const CollapsiblePanel = <T extends PolymorphicElement>(
  props: CollapsibleElementProps<T>
) => {
  const { isOpen, id } = useCollapseContext();
  let elementRef = null;

  const allProps = mergeProps(defaultCollapsibleElementProps, props);

  const [ownProps, otherProps] = splitProps(allProps, [
    "as",
    "openedClass",
    "class",
    "classList",
    "closedClass",
  ]);

  const component = ownProps.as || "div";

  createEffect(() => {
    if (elementRef) {
      elementRef.style.setProperty(
        "--collapse-panel-height",
        `${isOpen() ? elementRef.scrollHeight : 0}px`
      );
    }
  });

  return (
    <Dynamic
      ref={elementRef}
      component={component}
      {...otherProps}
      id={id}
      class={`overflow-hidden px-4 transition-[height] duration-500 ease-in-out h-[var(--collapse-panel-height)] ${
        ownProps.class
      }`}
      classList={{
        [ownProps.openedClass]: isOpen(),
        [ownProps.closedClass]: !isOpen(),
        ...ownProps.classList,
      }}
      aria-labelledby={id}
    />
  );
};
