import { PersonPrototype } from "./prototype";

export abstract class Person implements PersonPrototype {
  public name: string;
  public age: number;

  constructor();
  constructor(source?: Person);
  constructor(source?: Person) {
    if (source) {
      this.name = source.name;
      this.age = source.age;
    } else {
      this.name = "";
      this.age = 0;
    }
  }
  public abstract clone(): PersonPrototype;
  public abstract greet(): void;
}