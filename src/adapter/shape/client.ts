import { RoundHole } from "./round-hole";
import { RoundPeg } from "./round-peg";
import { RoundPegAdapter } from "./round-peg.adapter";
import { SquareHole } from "./square-hole";
import { SquarePeg } from "./square-peg";
import { SquarePegAdapter } from "./squeare-peg.adapter";

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(roundHole.fits(roundPeg)); // true

const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);
// roundHole.fits(smallSquarePeg); // Error: Argument of type 'SquarePeg' is not assignable to parameter of type 'RoundPeg'.

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
console.log(roundHole.fits(smallSquarePegAdapter)); // true
console.log(roundHole.fits(largeSquarePegAdapter)); // false

const squareHole = new SquareHole(5);
console.log(squareHole.fits(smallSquarePeg)); // true
console.log(squareHole.fits(largeSquarePeg)); // false

const smallRoundPegAdapter = new RoundPegAdapter(new RoundPeg(2.5));
const largeRoundPegAdapter = new RoundPegAdapter(new RoundPeg(10));
console.log(squareHole.fits(smallRoundPegAdapter)); // true
console.log(squareHole.fits(largeRoundPegAdapter)); // false