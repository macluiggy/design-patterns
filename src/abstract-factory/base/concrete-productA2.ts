import { AbstractProductA } from "./abstract-productA";


export class ConcreteProductA2 implements AbstractProductA {
  operationProductA(): string {
    return '{Result of the ConcreteProductA2}';
  }
}