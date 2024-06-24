import { createContext } from "solid-js";

import { TypeOrNull } from "types";

import { CollapseContextData } from "./types";

export const CollapseContext = createContext<TypeOrNull<CollapseContextData>>(null);
