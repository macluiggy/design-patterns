import { RoundShape } from "./round-shape";

export class RoundPeg implements RoundShape {
  constructor(public radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}