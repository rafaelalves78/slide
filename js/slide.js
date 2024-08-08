export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mosemove", this.onMove);
  }
  onMove(event) {}
  onEnd() {
    this.wrapper.removeEventListener("mosemove", this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mounsedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents;
    this.addSlideEvents;
    return this;
  }
}
