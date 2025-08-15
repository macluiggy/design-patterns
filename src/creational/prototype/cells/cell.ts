import { Prototype } from "./prototype";

export abstract class Cell implements Prototype {
  x: number;
  y: number;
  protected point = '.'

  constructor(source: Cell) {
    this.x = source.x;
    this.y = source.y;
  }

  abstract clone(): Cell;
}