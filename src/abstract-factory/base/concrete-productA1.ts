import { AbstractProductA } from "./abstract-productA";

export class ConcreteProductA1 implements AbstractProductA {
  operationProductA(): string {
    return '{Result of the ConcreteProductA1}';
  }
}