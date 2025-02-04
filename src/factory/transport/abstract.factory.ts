import type { Transport } from "./transport";

export abstract class TransportFactory {
  abstract createTransport(): Transport;
}