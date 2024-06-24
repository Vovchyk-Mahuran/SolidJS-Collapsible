import {
  PolymorphicElement,
  PolymorphicElementProps,
} from "./polymorphic-element.type";

type CollapsibleElementOwnProps<T> = {
  as?: T;
  classList?: Record<string, boolean>;
  class?: string;
  openedClass?: string;
  closedClass?: string;
};

export type CollapsibleElementProps<T extends PolymorphicElement> = PolymorphicElementProps<T, CollapsibleElementOwnProps<T>>;
