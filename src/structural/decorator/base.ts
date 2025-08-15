interface Component {
  execute(): void;
}

class ConcreteComponent implements Component {
  execute(): void {
    console.log('ConcreteComponent: Executing');
  }
}

class BaseDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  execute(): void {
    this.component.execute();
  }
}

class ConcreteDecoratorA extends BaseDecorator {
  execute(): void {
    super.execute();
    this.additionalBehaviorA();
  }

  private additionalBehaviorA(): void {
    console.log('ConcreteDecoratorA: Adding behavior A');
  }
}

class ConcreteDecoratorB extends BaseDecorator {
  execute(): void {
    super.execute();
    this.additionalBehaviorB();
  }

  private additionalBehaviorB(): void {
    console.log('ConcreteDecoratorB: Adding behavior B');
  }
}
// Example usage
const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);
decoratorB.execute();