export interface ComputerBuilder {
  reset(): void;
  setCPU(cpu: string): void;
  setRam(memory: string): void;
  setHardDrive(hardDrive: string): void;
  getResult(): any;
}