export class Observer {
  subs: any[];

  constructor() {
    this.subs = [];
  }

  watch(fn) {
    this.subs.push(fn);
  }

  emit(params) {
    this.subs.forEach((fn) => {
      fn(params);
    });
  }

  destroy() {
    this.subs = [];
  }
}
