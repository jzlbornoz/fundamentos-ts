export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string, private id: number) {}

  getName() {
    return this.name;
  }

  static create(name: string, id: number) {
    // recibe los mismos parametros del constructor.
    if (MyService.instance === null) {
      console.log('Se crea la instancia, una sola vez');
      MyService.instance = new MyService(name, id);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service1', 12);
console.log(myService1.getName());

const service2 = MyService.create('service2', 23);
console.log(service2.getName());

console.log(myService1 === service2);
