import { Builder } from "./builder";
import { Product1 } from "./product1";

export class ConcreteBuilder1 implements Builder {
  private product: Product1 = new Product1();

  public reset(): void {
    this.product = new Product1();
  }

  public getProduct<T>(): T {
    const result = this.product;
    this.reset();
    return result as T;
  }

  buildPart1(part: string) {
    console.log('Building part 1 for product 1');
    this.product = { ...this.product, part1: part };
  }

  buildPart2(part: string) {
    console.log('Building part 2 for product 1');
    this.product = { ...this.product, part2: part };
  }

  buildPart3(part: string) {
    console.log('Building part 3 for product 1');
    this.product = { ...this.product, part3: part };
  }
}