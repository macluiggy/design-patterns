import { HouseBuilder } from "./house-builder";
import { WoodHouse } from "../products/wood-house";

export class WoodHouseBuilder implements HouseBuilder {
    private house: WoodHouse = new WoodHouse();
    reset(): void {
      this.house = new WoodHouse();
    }
    buildWalls(): void {
      console.log('Building wood walls');
    }
    buildDoors(): void {
      console.log('Building wood doors');
    }
    buildWindows(): void {
      console.log('Building wood windows');
    }
    buildRoof(): void {
      console.log('Building wood roof');
    }
    buildGarage(): void {
      console.log('Building wood garage');
    }
    buildGarden(): void {
      console.log('Building wood garden');
    }
    buildSwimmingPool(): void {
      console.log('Building wood swimming pool');
    }
    getResult(): WoodHouse {
      const result = this.house;
      this.reset();
      return result;
    }
}