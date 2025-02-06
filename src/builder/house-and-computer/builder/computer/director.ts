import { ComputerBuilder } from "./builders/computer-builder";

export class Director {
  builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }
  setBuilder(builder: ComputerBuilder): void {
    this.builder = builder;
  }
  constructLenovoComputer(): void {
    this.builder.reset();
    this.builder.setCPU("Intel Core i7");
    this.builder.setRam('16');
    this.builder.setHardDrive('512GB SSD');
  }

  constructMacComputer(): void {
    this.builder.reset();
    this.builder.setCPU("Intel Core i9");
    this.builder.setRam('32');
    this.builder.setHardDrive('1TB SSD');
  }
}