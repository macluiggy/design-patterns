import { ConcreteBuilder1 } from "./concrete-builder1";
import { ConcreteBuilder2 } from "./concrete-builder2";
import { Director } from "./director";

const builder1 = new ConcreteBuilder1();
const director1 = new Director(builder1);
director1.construct();
const product1 = builder1.getProduct();
console.log(product1);

const builder2 = new ConcreteBuilder2();
const director2 = new Director(builder2);
director2.construct();
const product2 = builder2.getProduct();
console.log(product2);