import { Engine } from "./engine";

export class SportsEngine implements Engine {
    name: string = "Sports engine";
    start(): void {
        console.log("Sports engine started");
    }
    stop(): void {
        console.log("Sports engine stopped");
    }
    increasePower(): void {
        console.log("Sports engine power increased");
    }
    decreasePower(): void {
        console.log("Sports engine power decreased");
    }
    diagnostics(): void {
        console.log("Sports engine diagnostics");
    }
}