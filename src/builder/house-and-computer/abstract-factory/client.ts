import { CementMacBuilderFactory } from "./cement-mac-builder.factory";
import { WoodLenovoBuilderFactory } from "./wood-lenovo-builder.factory";
import { AbstractBuilderFactory } from "./abstract-builder.factory";
import { HouseBuilder } from "../builder/house/builders/house-builder";
import { ComputerBuilder } from "../builder/computer/builders/computer-builder";

export class Client {
  private houseBuilder: HouseBuilder;
  private computerBuilder: ComputerBuilder;

  constructor(factory: AbstractBuilderFactory) {
    this.houseBuilder = factory.createHouseBuilder();
    this.computerBuilder = factory.createComputerBuilder();
  }

  buildHouse(): void {
    this.houseBuilder.buildGarage();
    this.houseBuilder.buildWalls();
    this.houseBuilder.buildRoof();
    const product = this.houseBuilder.getResult();
    console.log(product);
  }

  buildComputer(): void {
    this.computerBuilder.setCPU("Intel i9");
    this.computerBuilder.setRam("32GB");
    this.computerBuilder.setHardDrive("1TB SSD");
    const product = this.computerBuilder.getResult();
    console.log(product);
  }
}

const woodLenovoFactory = new WoodLenovoBuilderFactory();
const cementMacFactory = new CementMacBuilderFactory();

const client1 = new Client(woodLenovoFactory);
client1.buildHouse();
client1.buildComputer();

const client2 = new Client(cementMacFactory);
client2.buildHouse();
client2.buildComputer();