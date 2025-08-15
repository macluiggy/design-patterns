import { Person } from "./person";

export class RobotPerson extends Person {
  public model: string;
  public name: string = "Robot";
  public age: number = 0;

  constructor();
  constructor(source?: RobotPerson);
  constructor(source?: RobotPerson) {
    super(source);
    if (source) {
      this.model = source.model;
      this.name = source.name;
      this.age = source.age;
    } else {
      this.model = "";
    }
  }

  public clone(): RobotPerson {
    return new RobotPerson(this);
  }

  public greet(): void {
    console.log(`I am a robot person. My model is ${this.model}.`);
  }
}