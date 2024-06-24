import { createSignal } from "solid-js";

export const useToggle = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = createSignal<boolean>(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    handleToggle,
  };
};
