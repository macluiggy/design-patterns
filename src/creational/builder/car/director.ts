import { Builder } from "./builder";
import { CarProduct } from "./car-product";
import { Engine } from "./engine";
import { SportsEngine } from "./sports-engine";

export class Director {
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }
  constructSportsCar(): void {
    this.builder.reset();
    this.builder.setSeats(2);
    this.builder.setEngine(new SportsEngine());
    this.builder.setTripComputer();
    this.builder.setGPS();
  }

  constructoctCarManual(): void {
    this.builder.reset();
    this.builder.setSeats(8);
    this.builder.setEngine(new SportsEngine());
    this.builder.setTripComputer();
    this.builder.setGPS();
  }
}