import { RoundPeg } from "./round-peg";
import { SquarePeg } from "./square-peg";

export class SquarePegAdapter extends RoundPeg {
  private squarePeg: SquarePeg;
  constructor(squarePeg: SquarePeg) {
    super(squarePeg.getWidth());
    this.squarePeg = squarePeg;
  }

  getRadius(): number {
    return this.squarePeg.getWidth() * Math.sqrt(2) / 2;
  }
}