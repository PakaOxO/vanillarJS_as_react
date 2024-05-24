import Component from "../core/Component.js";

export default class Counter extends Component {
  init() {
    this.state = {
      counts: [0, 2, 4],
    };
  }

  setEvent() {
    this.addEvent("click", ".addCount", ({ target }) => {
      const newCounts = [...this.state.counts];
      newCounts[target.dataset.index]++;
      this.setState({ counts: newCounts });
      this.render(this.$target);
    });
  }

  template() {
    return `
      <div>
        ${this.state.counts
          .map((count, key) => {
            return `
            <div>
              <span>Counter ${key} : ${count}</span>
              <button class="addCount" data-index="${key}">증가</button>
            </div>
            `;
          })
          .join("")}
      </div>
    `;
  }
}

