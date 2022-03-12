import App from '../App';

export type IComponent = {
  new (props: any, target: HTMLElement): App;
};
