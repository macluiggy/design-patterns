export interface HouseBuilder {
    reset(): void;
    getResult(): any;
    buildWalls(): void;
    buildDoors(): void;
    buildWindows(): void;
    buildRoof(): void;
    buildGarage(): void;
    buildGarden(): void;
    buildSwimmingPool(): void;
}