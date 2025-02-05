import { Builder } from "./builder";
import { Product2 } from "./product2";

export class ConcreteBuilder2 implements Builder {
  private product2: Product2 = new Product2();

  public reset(): void {
    this.product2 = new Product2();
  }

  public getProduct(): Product2 {
    const result = this.product2;
    this.reset();
    return result;
  }

  buildPart1(part: string) {
    console.log('Building part 1 for product 2');
    this.product2 = { ...this.product2, partA: part };
  }

  buildPart2(part: string) {
    console.log('Building part 2 for product 2');
    this.product2 = { ...this.product2, partB: part };
  }

  buildPart3(part: string) {
    console.log('Building part 3 for product 2');
    this.product2 = { ...this.product2, partC: part };
  }
}