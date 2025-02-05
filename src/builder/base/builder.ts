export interface Builder {
    getProduct<T>(): T;
    buildPart1(part: string): void;
    buildPart2(part: string): void;
    buildPart3(part: string): void;
}