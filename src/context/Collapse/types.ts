import { Accessor } from "solid-js";

export type CollapseContextData = {
    isOpen: Accessor<boolean>;
    handleToggle: () => void;
    id: string;
} 
