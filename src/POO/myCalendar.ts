export class MyCalendar {
  #day: number;
  #month: number;
  constructor(public year: number = 2022, month: number = 1, day: number = 1) {
    this.#day = day;
    this.#month = month;
  }

  printDate(): string {
    return `${this.year}/${this.#month}/${this.#day}`;
  }

  addDate(amount: number, type: 'YY' | 'DD' | 'MM') {
    if (type === 'DD') {
      this.#day += amount;
      if (this.#day > 30) {
        this.#day -= 30;
        this.#month += 1;
      }
    }
    if (type === 'MM') {
      this.#month += amount;
      if (this.#month > 12) {
        this.#month -= 11;
        this.year += 1;
      }
    }
    if (type === 'YY') {
      this.year += amount;
    }
    return `${this.year}/${this.#month}/${this.#day}`;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get day() {
    return this.#day;
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this.#month = value;
    } else {
      throw new Error('month out of range');
    }
  }
}

const date = new MyCalendar();

console.log(date.printDate());
console.log(`${date.year}: `, date.isLeapYear);

console.log(date.addDate(12, 'DD'));
console.log(date.addDate(20, 'DD'));
console.log(date.addDate(11, 'MM'));
console.log(date.addDate(28, 'DD'));
date.month = 8;
console.log(date.addDate(1, 'YY'));
console.log(`${date.year}: `, date.isLeapYear);
