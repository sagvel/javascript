import { createCalculator } from './app.js';

const calc = createCalculator();

console.log(calc.add(23));
console.log(calc.getMemo());
console.log(calc.add(2));
console.log(calc.getMemo());
