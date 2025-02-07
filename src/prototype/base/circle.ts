import { Shape } from "./shape";

export class Circle extends Shape {
  public radius: number;

  constructor(source: Circle) {
    super(source);
    this.radius = source.radius;
  }

  clone(): Shape {
    return new Circle(this);
  }
}