import { StemCell } from "./stem-cells";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class Client {
  cells: StemCell[] = [];
  constructor() {
    const initialStemCell = new StemCell({} as StemCell);
    this.cells.push(initialStemCell);
    // this.cloneEveryOneSecond();
  }

  async init() {
    const stemCell = new StemCell({
       
    } as StemCell);
    // const clonedStemCell = stemCell.clone();
    let cellCount = 1;
    while (this.cells.length < 300000) {
      await delay(1000);
      const points = this.cells.map(cell => cell.point).join('');
      console.log(points);
      console.log(`Cell count: ${cellCount}`);
      
      const cellsLength = this.cells.length;
      for (let i = 0; i < cellsLength; i++) {
        this.cells.push(stemCell.clone());
        cellCount++;
      }
    }
  }
  // cloneEveryOneSecond() {
  //   setInterval(() => {
  //     const points = this.cells.map(cell => cell.point).join('');
  //     // console.log(points);
  //     const newClones = this.cells.map(cell => cell.clone());
  //     this.cells.push(...newClones);
  //   }, 1000);
  // }
}

new Client().init();