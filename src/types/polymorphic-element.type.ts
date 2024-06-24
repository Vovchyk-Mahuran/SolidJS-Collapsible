import { Component, ComponentProps, JSX } from "solid-js";

export type PolymorphicElement =
  | keyof JSX.IntrinsicElements
  | Component<unknown>;

export type PolymorphicElementProps<
  T extends PolymorphicElement,
  OwnProps = {},
> = OwnProps & Omit<ComponentProps<T>, keyof OwnProps>;
