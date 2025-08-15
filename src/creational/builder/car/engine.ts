export interface Engine {
    name: string;
    start(): void;
    stop(): void;
    increasePower(): void;
    decreasePower(): void;
    diagnostics(): void;
}