import { AbstractBuilderFactory } from "./abstract-builder.factory";
import { ComputerBuilder } from "../builder/computer/builders/computer-builder";
import { LenovoBuilder } from "../builder/computer/builders/lenovo-builder";
import { WoodHouseBuilder } from "../builder/house/builders/wood-house-builder";
import { HouseBuilder } from "../builder/house/builders/house-builder";

export class WoodLenovoBuilderFactory implements AbstractBuilderFactory {
  createHouseBuilder(): HouseBuilder {
    return new WoodHouseBuilder()
  }
  createComputerBuilder(): ComputerBuilder {
    return new LenovoBuilder()
  }
}