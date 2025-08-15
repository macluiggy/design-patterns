import { Engine } from "./engine";

export interface Builder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine: Engine): void;
    setTripComputer(): void;
    setGPS(): void;
}