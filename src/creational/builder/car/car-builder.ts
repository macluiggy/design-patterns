import { Builder } from "./builder";
import { CarProduct } from "./car-product";
import { Engine } from "./engine";

export class CarBuilder implements Builder {
    private car: CarProduct;
    reset(): void {
      this.car = new CarProduct();
    }
    setSeats(seats: number): void {
      this.car.seats = seats;
    }
    setEngine(engine: Engine): void {
      this.car.engine = engine;
    }
    setTripComputer(): void {
      this.car.tripComputer = true;
    }
    setGPS(): void {
      this.car.gps = true;
    }

    getResult(): CarProduct {
      const result = this.car;
      this.reset();
      return result;
    }
}