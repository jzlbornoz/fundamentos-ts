class MyMath {
  static readonly PI: number = 3.1415;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(12, 23, 45, 67, 78, 56, 34, 54, 1000));
const numbers = [23, 35, 23, 1, 54, 45, 5, 56, 103];
console.log(MyMath.max(...numbers));
console.log(MyMath.max(-1, -10, -122));
