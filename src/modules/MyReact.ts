export abstract class Component {
  props: any;
  state: any;

  constructor(props: Object) {
    this.props = props;
    this.state = {};
  }

  setState(state: Object) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.render();
  }

  qs(selector: string, scope: Document | HTMLElement = document) {
    if (!selector) throw 'no selector';
    return scope.querySelector(selector);
  }

  abstract render(): void;
}

export const renderComponent = (
  Component: any,
  props: Object | null,
  container: HTMLElement,
) => {
  const component = new Component(props);
  container.appendChild(component.render());
};
