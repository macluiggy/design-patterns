import { SquareShape } from "./square-shape";

export class SquareHole implements SquareShape {
  constructor(public width: number) {}

  getWidth(): number {
    return this.width;
  }

  fits(peg: SquareShape): boolean {
    return this.width >= peg.getWidth();
  }
}