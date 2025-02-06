import { MacBook } from "../products/macbook";
import { ComputerBuilder } from "./computer-builder";

export class MacBuilder implements ComputerBuilder {
    setCPU(cpu: string): void {
      this.computer.touchpad = cpu;
    }
    setRam(memory: string): void {
      this.computer.keyboard = memory;
    }
    setHardDrive(hardDrive: string): void {
      this.computer.screen = hardDrive
    }
    private computer: MacBook = new MacBook();
    reset(): void {
      this.computer = new MacBook();
    }
    getResult(): MacBook {
      const result = this.computer;
      this.reset();
      return result;
    }
}