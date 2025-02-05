import { AbstractFactory } from "./abstract-factory";
import { ConcreteProductA1 } from "./concrete-productA1";
import { ConcreteProductB1 } from "./concrete-productB1";

export class ConcreteFactory1 implements AbstractFactory {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}