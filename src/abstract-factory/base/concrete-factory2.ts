import { AbstractFactory } from "./abstract-factory";
import { ConcreteProductA2 } from "./concrete-productA2";
import { ConcreteProductB2 } from "./concrete-productB2";

export class ConcreteFactory2 implements AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }
  createProductB() {
    return new ConcreteProductB2();
  }
}