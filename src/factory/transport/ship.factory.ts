import { TransportFactory } from "./abstract.factory";
import { Ship } from "./ship";

export class ShipFactory extends TransportFactory {
  createTransport() {
    return new Ship();
  }
}