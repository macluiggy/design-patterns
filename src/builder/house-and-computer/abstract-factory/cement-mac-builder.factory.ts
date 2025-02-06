import { ComputerBuilder } from "../builder/computer/builders/computer-builder";
import { MacBuilder } from "../builder/computer/builders/mac-builder";
import { CementHouseBuilder } from "../builder/house/builders/cement-house-builder";
import { HouseBuilder } from "../builder/house/builders/house-builder";
import { AbstractBuilderFactory } from "./abstract-builder.factory";

export class CementMacBuilderFactory implements AbstractBuilderFactory {
  createHouseBuilder(): HouseBuilder {
    return new CementHouseBuilder()
  }
  createComputerBuilder(): ComputerBuilder {
    return new MacBuilder()
  }
}