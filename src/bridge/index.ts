class Shape {
  draw() {
    console.log('Shape draw');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Circle draw');
  }
}

class Square extends Shape {
  draw() {
    console.log('Square draw');
  }
}

class Color {
  fill() {
    console.log('Color fill');
  }
}

class Red extends Color {
  fill() {
    console.log('Red fill');
  }
}

class Green extends Color {
  fill() {
    console.log('Green fill');
  }
}
// Bridge Pattern Example
// This example demonstrates the Bridge Pattern by separating the abstraction (Shape) from its implementation (Color).
// The Shape class is the abstraction, and the Color class is the implementation.
class ShapeWithColor {
  private shape: Shape;
  private color: Color;
  constructor(shape: Shape, color: Color) {
    this.shape = shape;
    this.color = color;
  }
  draw() {
    this.shape.draw();
    this.color.fill();
    console.log('ShapeWithColor: Drawing shape with color');
  }
}

class RedRectangle extends ShapeWithColor {
  constructor() {
    super(new Square(), new Red());
  }
  draw() {
    console.log('RedRectangle draw');
    super.draw();
  }
}

const redRectangle = new RedRectangle();
redRectangle.draw();


// another example

interface Implementation {
  method1(): void;
  method2(): void;
  method3(): void;
}

class ConcreteImplementationA implements Implementation {
  method1() {
    console.log('ConcreteImplementationA method1');
  }

  method2() {
    console.log('ConcreteImplementationA method2');
  }

  method3() {
    console.log('ConcreteImplementationA method3');
  }
}

class ConcreteImplementationB implements Implementation {
  method1() {
    console.log('ConcreteImplementationB method1');
  }

  method2() {
    console.log('ConcreteImplementationB method2');
  }

  method3() {
    console.log('ConcreteImplementationB method3');
  }
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  feature1() {
    this.implementation.method1();
  }

  feature2() {
    this.implementation.method2();
  }

  feature3() {
    this.implementation.method3();
  }
}

class RefinedAbstraction extends Abstraction {
  feature4() {
    console.log('RefinedAbstraction feature4');
  }
}

// Usage example
const circle = new Circle();
const red = new Red();
const shapeWithColor = new ShapeWithColor(circle, red);
shapeWithColor.draw();
const implementationA = new ConcreteImplementationA();
const abstraction = new Abstraction(implementationA);
abstraction.feature1();
abstraction.feature2();
abstraction.feature3();
const refinedAbstraction = new RefinedAbstraction(implementationA);
refinedAbstraction.feature1();
refinedAbstraction.feature2();
refinedAbstraction.feature3();
refinedAbstraction.feature4();