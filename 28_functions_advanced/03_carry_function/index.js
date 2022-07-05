// input: number
// -> inner function
// --input: number
// --output: number
// output: function

export const mult = firstNum => secondNum => firstNum * secondNum;

// test mult function
const resMult = mult(2)(3); // 6
console.log(resMult); // 6

// input: number
// output: number
export const twice = mult(2);

// test twice function
const resTwice = twice(4);
console.log(resTwice);

// input: number
// output: number
export const triple = mult(3);

// test triple function
const resTriple = triple(4);
console.log(resTriple);
