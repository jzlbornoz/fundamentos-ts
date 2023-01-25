export class Animal {
  constructor(public name: string) {}

  move() {
    const res = `${this.name} is moving`;
    console.log(res);
  }
  greeting() {
    const res = `Hi i am ${this.name}`;
    console.log(res);
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      const res = 'woof';
      console.log(res);
    }
  }
}

const animal = new Animal('michi');

animal.move();
animal.greeting();

const firulay = new Dog('firulay', 'gorge');

firulay.move();
firulay.greeting();
firulay.woof(4);
console.log(firulay.owner);
