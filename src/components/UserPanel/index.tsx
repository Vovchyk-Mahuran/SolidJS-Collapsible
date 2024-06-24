import { Component, splitProps } from "solid-js";

interface UserPanelProps {
  name: string;
}

export const UserPanel: Component<UserPanelProps> = (props) => {
  const [ownProps, otherProps] = splitProps(props, ["name"]);

  return (
    <article {...otherProps}>
      <h3 class="my-2 font-bold">Hello my name is {ownProps.name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        deserunt suscipit et fugit perferendis autem soluta eius. Temporibus
        dolore maiores nihil sunt aut sit? Sequi, aperiam a? Nesciunt, quis hic?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        deserunt suscipit et fugit perferendis autem soluta eius. Temporibus
        dolore maiores nihil sunt aut sit? Sequi, aperiam a? Nesciunt, quis hic?
      </p>
    </article>
  );
};
