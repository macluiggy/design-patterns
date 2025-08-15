import { RoundPeg } from "./round-peg";
import { SquarePeg } from "./square-peg";

export class RoundPegAdapter extends SquarePeg {
  private roundPeg: RoundPeg;
  constructor(roundPeg: RoundPeg) { // this is the adaptee
    super(roundPeg.getRadius() * 2);
    this.roundPeg = roundPeg;
  }

  getWidth(): number {
    return this.roundPeg.getRadius() * 2;
  }
}