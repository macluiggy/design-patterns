import { RoundPeg } from "./round-peg";
import { RoundShape } from "./round-shape";

export class RoundHole implements RoundShape {
  constructor(public radius: number) {}

  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.radius;
  }

  getRadius(): number {
    return this.radius;
  }
}