class MyDate {
  constructor(
    private year: number,
    private month: number,
    private day: number
  ) {}
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
