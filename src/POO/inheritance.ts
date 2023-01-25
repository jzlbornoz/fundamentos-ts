export class Animal {
  constructor(protected name: string) {}

  move() {
    const res = `${this.name} is moving`;
    console.log(res);
  }
  greeting() {
    const res = `Hi i am ${this.name}`;
    console.log(res);
  }
  protected doSomething() {
    console.log('do');
  }
}

export class Dog extends Animal {
  constructor(nameDog: string, public owner: string) {
    super(nameDog);
  }
  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      const res = `woof ${this.name}`;
      console.log(res);
    }
    this.doSomething();
  }
  move(): void {
    console.log('moving as a dog');
    super.move();
  }
}

const firulay = new Dog('firulay', 'gorge');

// firulay.name = 'jordam'; -> X
firulay.move();
firulay.greeting();
firulay.woof(4);
console.log(firulay.owner);
firulay.move();
