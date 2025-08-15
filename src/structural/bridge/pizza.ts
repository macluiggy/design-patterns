// without bridge pattern
export class Pizza {
  constructor(private name: string) {}

  bake() {
    console.log(`Baking ${this.name} pizza`);
  }
}

export class CheesePizza extends Pizza {
  constructor() {
    super("Cheese");
  }
}

export class PepperoniPizza extends Pizza {
  constructor() {
    super("Pepperoni");
  }
}

export class ClamPizza extends Pizza {
  constructor() {
    super("Clam");
  }
}

export class VeggiePizza extends Pizza {
  constructor() {
    super("Veggie");
  }
}

// usage
const cheesePizza = new CheesePizza();
cheesePizza.bake();
const pepperoniPizza = new PepperoniPizza();
pepperoniPizza.bake();
const clamPizza = new ClamPizza();
clamPizza.bake();
const veggiePizza = new VeggiePizza();
veggiePizza.bake();

// with bridge pattern
export interface PizzaImplementation {
  bake(): void;
}
export interface PizzaAbstraction {
  bake(): void;
}

export class PizzaWithBridge implements PizzaAbstraction {
  constructor(private implementation: PizzaImplementation) {}

  bake() {
    this.implementation.bake();
  }
}

export class CheesePizzaWithBridge implements PizzaImplementation {
  bake() {
    console.log(`Baking Cheese pizza`);
  }
}

export class PepperoniPizzaWithBridge implements PizzaImplementation {
  bake() {
    console.log(`Baking Pepperoni pizza`);
  }
}

export class ClamPizzaWithBridge implements PizzaImplementation {
  bake() {
    console.log(`Baking Clam pizza`);
  }
}

export class VeggiePizzaWithBridge implements PizzaImplementation {
  bake() {
    console.log(`Baking Veggie pizza`);
  }
}

// usage
const cheesePizzaWithBridge = new PizzaWithBridge(new CheesePizzaWithBridge());
cheesePizzaWithBridge.bake();
const pepperoniPizzaWithBridge = new PizzaWithBridge(new PepperoniPizzaWithBridge());
pepperoniPizzaWithBridge.bake();
const clamPizzaWithBridge = new PizzaWithBridge(new ClamPizzaWithBridge());
clamPizzaWithBridge.bake();
const veggiePizzaWithBridge = new PizzaWithBridge(new VeggiePizzaWithBridge());
veggiePizzaWithBridge.bake();

