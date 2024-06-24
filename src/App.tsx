import { type Component } from "solid-js";

import { useToggle } from "hooks";

import {
  Button,
  Collapsible,
  CollapsibleHeader,
  CollapsiblePanel,
  CollapsiblePanelViaGrid,
  UserPanel,
} from "./components";

const App: Component = () => {
  const {
    isOpen: isOpenCssVarExample,
    handleToggle: handleToggleCssVarExample,
  } = useToggle();

  const {
    isOpen: isOpenGridRowsExample,
    handleToggle: handleToggleGridRowsExample,
  } = useToggle();

  return (
    <div class="p-6 h-screen w-screen bg-stone-900 text-white">
      <div class="grid grid-cols-2 gap-5">
        <Collapsible
          id="collapse-1"
          isOpen={isOpenCssVarExample}
          handleToggle={handleToggleCssVarExample}
        >
          <CollapsibleHeader as={Button} class="btn py-3 px-4">
            Controlled by Parent (Animation via css-variable)
          </CollapsibleHeader>
          <CollapsiblePanel
            class="bg-blue-300 duration-300 rounded-lg"
            as="section"
          >
            <div class="p-4">
              The component is <em>“controlled”</em> when the important
              information in it is driven by props rather than its own local
              state. This lets the parent component fully specify its behavior.
            </div>
          </CollapsiblePanel>
        </Collapsible>
        <Collapsible
          id="collapse-2"
          isOpen={isOpenGridRowsExample}
          handleToggle={handleToggleGridRowsExample}
        >
          <CollapsibleHeader as={Button} class="btn py-3 px-4">
            Controlled by Parent (Animation via grid-template-rows)
          </CollapsibleHeader>
          <CollapsiblePanelViaGrid
            class="bg-blue-300 duration-300 rounded-lg"
            as="section"
          >
            <div class="p-4">
              The component is <em>“controlled”</em> when the important
              information in it is driven by props rather than its own local
              state. This lets the parent component fully specify its behavior.
            </div>
          </CollapsiblePanelViaGrid>
        </Collapsible>
        <Collapsible id="collapse-3" defaultOpened>
          <CollapsibleHeader class="text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 border-gray-700">
            Uncontrolled (Animation via css-variable)
          </CollapsibleHeader>
          <CollapsiblePanel
            class="duration-700 rounded-md"
            name="Volodymyr"
            openedClass="bg-orange-400"
            as={UserPanel}
          />
        </Collapsible>
        <Collapsible id="collapse-4" defaultOpened>
          <CollapsibleHeader class="text-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 hover:bg-gray-700 border-gray-700">
            Uncontrolled (Animation via grid-template-rows)
          </CollapsibleHeader>
          <CollapsiblePanelViaGrid
            class="duration-700 rounded-md overflow-auto"
            name="Volodymyr"
            openedClass="bg-orange-400"
            as={UserPanel}
          />
        </Collapsible>
      </div>
    </div>
  );
};

export default App;
