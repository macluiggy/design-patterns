import { AbstractFactory } from "./abstract-factory";
import { AbstractProductA } from "./abstract-productA";
import { AbstractProductB } from "./abstract-productB";
import { ConcreteFactory1 } from "./concrete-factory1";
import { ConcreteFactory2 } from "./concrete-factory2";

export class Client {
  private abstractProductA: AbstractProductA;
  private abstractProductB: AbstractProductB;

  constructor(factory: AbstractFactory) {
    this.abstractProductA = factory.createProductA();
    this.abstractProductB = factory.createProductB();
  }

  public run(): void {
    const operationProductB = this.abstractProductB.operationProductB();
    console.log(operationProductB);

    const operationProductA = this.abstractProductA.operationProductA();
    console.log(operationProductA);
  }
}

// with this, we can create a client that uses the a concrete factory that implements the AbstractFactory interface
// and then run the client
const factory1 = new ConcreteFactory1();
const client1 = new Client(factory1);
client1.run();

const factory2 = new ConcreteFactory2();
const client2 = new Client(factory2);
client2.run();