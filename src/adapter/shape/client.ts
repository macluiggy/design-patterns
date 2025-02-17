import { RoundHole } from "./round-hole";
import { RoundPeg } from "./round-peg";
import { SquarePeg } from "./square-peg";
import { SquarePegAdapter } from "./squeare-peg.adapter";

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(roundHole.fits(roundPeg));

const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);
// roundHole.fits(smallSquarePeg); // Error: Argument of type 'SquarePeg' is not assignable to parameter of type 'RoundPeg'.

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
console.log(roundHole.fits(smallSquarePegAdapter));
console.log(roundHole.fits(largeSquarePegAdapter));