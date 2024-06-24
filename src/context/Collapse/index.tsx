import { Component, ParentProps, splitProps } from "solid-js";

import { CollapseContextData } from "./types";

import { CollapseContext } from "./context";

export const CollapsibleProvider: Component<
  ParentProps<CollapseContextData>
> = (props) => {
  const [contextValue] = splitProps(props, ["handleToggle", "isOpen", "id"]);

  return (
    <CollapseContext.Provider value={contextValue}>
      {props.children}
    </CollapseContext.Provider>
  );
};
