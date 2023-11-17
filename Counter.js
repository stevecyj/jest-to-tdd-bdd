export default class Counter {
  constructor() {
    this.count = 0;
  }
  addOne() {
    this.count++;
  }
  addTwo() {
    this.count += 2;
  }
  minusOne() {
    this.count--;
  }
  minusTwo() {
    this.count -= 2;
  }
}
