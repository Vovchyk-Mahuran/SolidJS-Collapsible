import { Component, JSX, splitProps } from "solid-js";

export const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const [ownProps, otherProps] = splitProps(props, ["class"]);

  return (
    <button
      type="button"
      class={`border focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 ${ownProps.class}`}
      {...otherProps}
    />
  );
};
