import { Component } from './modules/MyReact.js';

class App extends Component {
  container: HTMLDivElement;

  constructor(props: Object) {
    super(props);

    this.state = {
      name: 'minjae',
    };

    this.container = document.createElement('div');
  }

  render(): HTMLDivElement {
    this.container.innerHTML = '';

    this.container.innerHTML = `
      <h1>바닐라 자바스크립트 To 리액트</h1>
      <h2>
        Hello ${this.state.name}
      </h2>
    `;

    return this.container;
  }
}

export default App;
