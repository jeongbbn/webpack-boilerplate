export default class Component {
  $target;
  $state;
  $sections;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {
    this.$state = {};
    this.$sections = [];
  };

  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() { }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
