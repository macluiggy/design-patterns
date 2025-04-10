interface Component {
  execute(): void;
}

class Leaf implements Component {
  constructor(private name: string) {}

  execute(): void {
    console.log(`Executing leaf: ${this.name}`);
  }
}
class Composite implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(child: Component): void {
    this.children.push(child);
  }

  remove(child: Component): void {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  execute(): void {
    console.log(`Executing composite: ${this.name}`);
    for (const child of this.children) {
      child.execute();
    }
  }
}

const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');
const composite1 = new Composite('Composite 1');
const composite2 = new Composite('Composite 2');
composite1.add(leaf1);
composite1.add(leaf2);
composite2.add(composite1);
composite2.add(new Leaf('Leaf 3'));
composite2.execute();