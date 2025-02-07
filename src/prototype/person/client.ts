import { Person } from "./person";
import { RobotPerson } from "./robot-person";
const robotPerson: RobotPerson = {
  name: "R2-D2",
  age: 0,
  model: "R2"
} as RobotPerson;
const robot = new RobotPerson(robotPerson);
console.log("Robot:", robot);

robot.greet();
const clone = robot.clone();
console.log("Clone:", clone);
clone.greet();
// Compare this snippet from src/prototype/person/robot-person.ts:
const sameInstance = robot === clone;
console.log(`Robot and clone are the same instance: ${sameInstance}`);
const sameType = robot.constructor === clone.constructor;
console.log(`Robot and clone are the same type: ${sameType}`);