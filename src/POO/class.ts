class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(y: number, m: number, d: number) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
}

const date = new MyDate(1999, 1, 23);

console.log(date);
