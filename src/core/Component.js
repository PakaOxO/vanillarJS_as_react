export default class Component {
  $target;
  state;

  constructor($target) {
    this.$target = $target;
    this.init();
    this.render();
    this.setEvent();
  }

  // state 등 초기화 작업 진행
  init() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // 반환할 UI 정의
  template() {
    return "";
  }

  // UI에 이벤트 등록
  setEvent() {}

  // 이벤트 등록 추상화
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  // 렌더링이 완료된 이후 작업할 내용
  mounted() {}

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
}

