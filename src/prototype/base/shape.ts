import { Prototype } from "./prototype";

export abstract class Shape implements Prototype {
  public X: number;
  public Y: number;
  public color: string;

  // A regular constructor.
  constructor();
  // The prototype constructor. A fresh object is initialized
  // with values from the existing object.
  constructor(source: Shape);
  constructor(source?: Shape) {
    if (source) {
      this.X = source.X;
      this.Y = source.Y;
      this.color = source.color;
    } else {
      // Optionally initialize with default values.
      this.X = 0;
      this.Y = 0;
      this.color = "";
    }
  }

  // The clone operation returns one of the Shape subclasses.
  abstract clone(): Shape;
}