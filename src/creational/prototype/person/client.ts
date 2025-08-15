import { RobotPerson } from "./robot-person";
const robot = new RobotPerson();
robot.model = "R2";
robot.age = 0;
robot.name = "R2-D2";
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