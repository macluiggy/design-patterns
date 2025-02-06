import { CementHouse } from "../products/cement-house";
import { HouseBuilder } from "./house-builder";

export class CementHouseBuilder implements HouseBuilder {
    private house: CementHouse = new CementHouse();
    reset(): void {
      this.house = new CementHouse();
    }
    buildWalls(): void {
      console.log('Building cement walls');
    }
    buildDoors(): void {
      console.log('Building cement doors');
    }
    buildWindows(): void {
      console.log('Building cement windows');
    }
    buildRoof(): void {
      console.log('Building cement roof');
    }
    buildGarage(): void {
      console.log('Building cement garage');
    }
    buildGarden(): void {
      console.log('Building cement garden');
    }
    buildSwimmingPool(): void {
      console.log('Building cement swimming pool');
    }
    getResult(): CementHouse {
      const result = this.house;
      this.reset();
      return result;
    }
}