import { Cell } from "./cell";

export class StemCell extends Cell {
  point = '🌱';
  x: number;
  y: number;
  constructor(source: StemCell) {
    super(source);
    this.x = source.x;
    this.y = source.y;
  }
  clone(): StemCell {
    return new StemCell(this);
  }
}