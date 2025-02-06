import { LenovoBuilder } from "./builders/lenovo-builder";
import { Director } from "./director";
import { MacBuilder } from "./builders/mac-builder";

const lenovoBuilder = new LenovoBuilder();
const macBuilder = new MacBuilder();
const director = new Director(lenovoBuilder);

director.constructLenovoComputer();
const lenovo = lenovoBuilder.getResult();
console.log(lenovo);

director.setBuilder(macBuilder);
director.constructMacComputer(); // Usa el método correcto para construir un Mac
const mac = macBuilder.getResult();
console.log(mac);