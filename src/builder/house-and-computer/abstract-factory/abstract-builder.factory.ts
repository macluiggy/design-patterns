import { ComputerBuilder } from "../builder/computer/builders/computer-builder";
import { HouseBuilder } from "../builder/house/builders/house-builder";

export interface AbstractBuilderFactory {
  // house and computer builders would be the abstract products from abstract factory pattern from the factory methods
  createHouseBuilder(): HouseBuilder;
  createComputerBuilder(): ComputerBuilder;
}