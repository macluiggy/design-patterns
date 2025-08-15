import { Builder } from "./builder";

export class Director {
    private builder: Builder;
    constructor(builder: Builder) {
        this.builder = builder;
    }
    construct() {
        this.builder.buildPart1('part1');
        this.builder.buildPart2('part2');
        this.builder.buildPart3('part3');
    }
}