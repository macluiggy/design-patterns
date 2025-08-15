import type { TransportFactory } from "./abstract.factory";
import { ShipFactory } from "./ship.factory";
import { TruckFactory } from "./truck.factory";

export class Client {
  factory: TransportFactory
  constructor(factory: TransportFactory) {
    this.factory = factory;
  }
  deliver() {
    const transport = this.factory.createTransport();
    transport.deliver();
  }
}

// se va por tierra
const truckFactory = new TruckFactory();
const client = new Client(truckFactory);
client.deliver();

// se va por agua
const shipFactory = new ShipFactory();
const client2 = new Client(shipFactory);
client2.deliver();