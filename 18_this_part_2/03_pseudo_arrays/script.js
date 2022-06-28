function sumOfSquares() {
  return [...arguments].reduce((acc, val) => acc + val**2, 0);
}

console.log(sumOfSquares(1, 2, 3));