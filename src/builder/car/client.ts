import { CarBuilder } from "./car-builder";
import { CarManualBuilder } from "./car-manual-builder";
import { Director } from "./director";

const carBuilder = new CarBuilder();
const carManualBuilder = new CarManualBuilder();
const director = new Director(carBuilder);
director.constructSportsCar();
const car = carBuilder.getResult();
console.log(car);

director.setBuilder(carManualBuilder);
director.constructoctCarManual();
const manual = carManualBuilder.getResult();
console.log(manual);