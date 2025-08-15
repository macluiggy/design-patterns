import { HouseBuilder } from "./builders/house-builder";

export class Director {
    private builder: HouseBuilder;

    constructor(builder: HouseBuilder) {
      this.builder = builder;
    }

    setBuilder(builder: HouseBuilder): void {
      this.builder = builder;
    }

    constructWoodHouse(): void {
      this.builder.buildWalls();
      this.builder.buildDoors();
      this.builder.buildWindows();
      this.builder.buildRoof();
      this.builder.buildGarage();
      this.builder.buildGarden();
      this.builder.buildSwimmingPool();
    }

    constructCementHouse(): void {
      this.builder.buildWalls();
      this.builder.buildDoors();
      this.builder.buildWindows();
      this.builder.buildRoof();
      this.builder.buildGarage();
      this.builder.buildGarden();
      this.builder.buildSwimmingPool();
    }
}