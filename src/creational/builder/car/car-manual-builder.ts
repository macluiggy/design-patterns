import { Builder } from "./builder";
import { Engine } from "./engine";
import { Manual } from "./manual";

export class CarManualBuilder implements Builder {
    private manual: Manual;
    reset(): void {
      this.manual = new Manual();
    }
    setSeats(seats: number): void {
      this.manual.seatsDescription = `This car has ${seats} seats`;
    }
    setEngine(engine: Engine): void {
      this.manual.engineDescription = `This car has a ${engine.name} engine`;
    }
    setTripComputer(): void {
      this.manual.tripComputerDescription = `This car has a trip computer`;
    }
    setGPS(): void {
      this.manual.gpsDescription = `This car has a GPS`;
    }

    getResult(): Manual {
      const result = this.manual;
      this.reset();
      return result;
    }
}