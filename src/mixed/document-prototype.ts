export interface DocumentPrototype<T extends DocumentPrototype<T> = DocumentPrototype<any>> {
    clone(): T;
}