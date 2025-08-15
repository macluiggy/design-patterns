import { TransportFactory } from "./abstract.factory";
import { Truck } from "./truck";

export class TruckFactory extends TransportFactory {
    createTransport() {
        return new Truck();
    }
}