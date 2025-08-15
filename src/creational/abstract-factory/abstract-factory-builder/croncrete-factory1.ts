import { ConcreteBuilder1 } from "../../builder/base/concrete-builder1";
import { AbstractBuilderFactory } from "./abstract-builder-factory";

export class ConcreteFactory1 implements AbstractBuilderFactory {
    createBuilder1() {
        return new ConcreteBuilder1();
    }
}