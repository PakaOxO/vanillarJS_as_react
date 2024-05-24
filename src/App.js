import Component from "./core/Component.js";
import Counter from "./components/Counter.js";

export default class App extends Component {
  mounted() {
    const $container = document.getElementById("container");
    new Counter($container);
  }

  template() {
    return `
      <main id="container"></main>
    `;
  }
}

