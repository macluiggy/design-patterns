import type { Transport } from "./transport";

export class Truck implements Transport {
  deliver() {
    console.log("Delivering by truck");
  }
}