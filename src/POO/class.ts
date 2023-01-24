class MyClass {
  year: number;
  month: number;
  day: number;
  constructor(y: number, m: number, d: number) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
}

const instance = new MyClass(1999, 1, 23);

console.log(instance);
