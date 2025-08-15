import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

export class Application {
  private shapes: Array<Shape> = [];

  constructor() {
    // Create a circle.
    const circle = new Circle({ X: 0, Y: 0, radius: 0 } as Circle);
    circle.X = 10;
    circle.Y = 10;
    circle.radius = 20;
    this.shapes.push(circle);

    // Clone the circle.
    const anotherCircle = circle.clone();
    this.shapes.push(anotherCircle);

    // Create a rectangle.
    const rectangle = new Rectangle({ width: 0, height: 0 } as Rectangle);
    rectangle.width = 10;
    rectangle.height = 20;
    this.shapes.push(rectangle);
  }

  businessLogic(): Array<Shape> {
    const shapesCopy: Array<Shape> = [];
    for (const s of this.shapes) {
      shapesCopy.push(s.clone());
    }
    return shapesCopy;
  }
}

// The client code.
const app = new Application();
const shapesCopy = app.businessLogic();
console.log(shapesCopy);