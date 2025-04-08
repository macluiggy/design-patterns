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