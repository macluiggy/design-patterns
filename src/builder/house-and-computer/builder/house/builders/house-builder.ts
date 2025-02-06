export interface HouseBuilder {
    reset(): void;
    buildWalls(): void;
    buildDoors(): void;
    buildWindows(): void;
    buildRoof(): void;
    buildGarage(): void;
    buildGarden(): void;
    buildSwimmingPool(): void;
}