import { LenovoThinkpad } from "../products/lenovo-thinkpad";
import { ComputerBuilder } from "./computer-builder";

export class LenovoBuilder implements ComputerBuilder {
    setCPU(cpu: string): void {
      this.computer.cpu = cpu;
    }
    setRam(memory: string): void {
      this.computer.ram = memory;
    }
    setHardDrive(hardDrive: string): void {
      this.computer.ssd = hardDrive
    }
    getComputer(): LenovoThinkpad {
      return this.computer
    }
    private computer: LenovoThinkpad = new LenovoThinkpad();
    reset(): void {
      this.computer = new LenovoThinkpad();
    }
    getResult(): LenovoThinkpad {
      const result = this.computer;
      this.reset();
      return result;
    }
}