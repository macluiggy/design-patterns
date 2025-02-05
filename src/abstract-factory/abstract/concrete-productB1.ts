
import { AbstractProductB } from "./abstract-productB";

export class ConcreteProductB1 implements AbstractProductB {
  operationProductB(): string {
    return '{Result of the ConcreteProductB1}';
  }
}