class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(y: number, m: number, d: number) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
  printDate(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }
  addDate(amount: number, type: 'YY' | 'DD' | 'MM') {
    if (type === 'DD') {
      this.day += amount;
      if (this.day > 30) {
        this.day -= 30;
        this.month += 1;
      }
    }
    if (type === 'MM') {
      this.month += amount;
      if (this.month > 12) {
        this.month -= 11;
        this.year += 1;
      }
    }
    if (type === 'YY') {
      this.year += amount;
    }
    return `${this.year}/${this.month}/${this.day}`;
  }
}

const date = new MyDate(2022, 1, 1);

console.log(date.printDate());

console.log(date.addDate(12, 'DD'));
console.log(date.addDate(20, 'DD'));
console.log(date.addDate(11, 'MM'));
console.log(date.addDate(28, 'DD'));
