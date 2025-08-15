import { Builder } from "../../builder/base/builder";
import { Director } from "../../builder/base/director";
import { AbstractBuilderFactory } from "./abstract-builder-factory";
import { ConcreteFactory1 } from "./croncrete-factory1";


export class Client {
    private abstractBuilderFactory: AbstractBuilderFactory;
    constructor(abstractBuilderFactory: AbstractBuilderFactory) {
        this.abstractBuilderFactory = abstractBuilderFactory;
    }
    createProduct() {
        const builder: Builder = this.abstractBuilderFactory.createBuilder1();
        const director = new Director(builder);
        director.construct();
        const product = builder.getProduct();
        console.log(product);
    }
}

// with this, we can create a client that uses the a concrete factory that implements the AbstractFactory interface
// and then run the client
const factory1 = new ConcreteFactory1();
const client1 = new Client(factory1);
client1.createProduct();