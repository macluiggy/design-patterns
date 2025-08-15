import type { Transport } from "./transport";

export class Ship implements Transport {
  deliver() {
    console.log("Delivering by ship");
  }
}