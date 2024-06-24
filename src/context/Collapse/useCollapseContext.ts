import { useContext } from "solid-js";

import { CollapseContext } from "./context";

export const useCollapseContext = () => {
  const ctx = useContext(CollapseContext);

  if (!ctx) {
    throw new Error(
      "useCollapseContext must be used within CollapsibleProvider"
    );
  }
  return ctx;
};
