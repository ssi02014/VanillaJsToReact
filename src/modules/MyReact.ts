import { IComponent } from '../interfaces/MyReact';

export abstract class Component {
  abstract container: HTMLElement;
  target: HTMLElement;
  state: Object;
  props: any;

  constructor(props: any, target: HTMLElement) {
    this.props = props;
    this.target = target;
    this.state = {};
  }

  setState(newState: any) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  }

  abstract render(): HTMLElement;
  abstract template(): string;
  abstract bindEvent(): void;
}

export const renderComponent = (
  Component: IComponent,
  props: any,
  target: HTMLElement,
) => {
  const component = new Component(props, target);
  target.appendChild(component.render());
};
