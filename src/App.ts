import { Component } from './modules/MyReact.js';
import { qs } from './utils/common.js';

interface AppState {
  names: string[];
  value: '';
}

class App extends Component {
  container: HTMLElement;
  state: AppState;

  constructor(props: any, target: HTMLElement) {
    super(props, target);
    this.container = document.createElement('div');
    this.state = { names: [], value: '' };
  }

  changeInput(e: any): void {
    this.setState({
      value: e.target.value,
    });
  }

  addName(): void {
    const { names, value } = this.state;

    this.setState({
      names: [...names, value],
      value: '',
    });
  }

  BindEvent(): void {
    const button = qs('button', this.container);
    const input = qs('input', this.container);

    button?.addEventListener('click', () => this.addName());
    input?.addEventListener('change', (e: any) => this.changeInput(e));
  }

  template(): string {
    const { names, value } = this.state;

    return `
      <h1>바닐라 자바스크립트 To 리액트</h1>
      <h2>
        Hello 
        ${names.map((name: string) => name).join(' ')}
      </h2>
      <input type=text value="${value}" />
      <button>이름 추가</button>
    `;
  }

  render(): HTMLElement {
    this.container.innerHTML = this.template();
    this.BindEvent();
    return this.container;
  }
}

export default App;
