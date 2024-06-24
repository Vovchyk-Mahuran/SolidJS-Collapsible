import { Accessor, Component, ParentProps, splitProps } from "solid-js";

import { CollapsibleProvider } from "context";

import { useToggle } from "hooks";

interface CollapsibleProps {
  isOpen?: Accessor<boolean>;
  handleToggle?: () => void;
  defaultOpened?: boolean;
  id: string;
}

export const Collapsible: Component<ParentProps<CollapsibleProps>> = (
  props
) => {
  const [controlledProps] = splitProps(props, ["isOpen", "handleToggle", "id"]);

  const { isOpen, handleToggle } = useToggle(props?.defaultOpened);

  return (
    <CollapsibleProvider
      isOpen={isOpen}
      handleToggle={handleToggle}
      {...controlledProps}
    >
      <div>{props.children}</div>
    </CollapsibleProvider>
  );
};
