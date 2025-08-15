import { SquareShape } from "./square-shape";

export class SquarePeg implements SquareShape {
  constructor(public width: number) {}

  getWidth(): number {
    return this.width;
  }
}