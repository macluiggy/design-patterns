import { CementHouseBuilder } from "./builders/cement-house-builder";
import { Director } from "./director";
import { WoodHouseBuilder } from "./builders/wood-house-builder";

const woodHouseBuilder = new WoodHouseBuilder();
const cementHouseBuilder = new CementHouseBuilder();
const director = new Director(woodHouseBuilder);
director.constructWoodHouse();
const woodHouse = woodHouseBuilder.getResult();
console.log(woodHouse);

director.setBuilder(cementHouseBuilder);
director.constructCementHouse();
const cementHouse = cementHouseBuilder.getResult();
console.log(cementHouse);