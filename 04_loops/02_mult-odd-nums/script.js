const m = 10;
const n = 100;
let result = 1;

for (let i = m; i <= n; i += 1) {
  if (i % 2 === 1) {
    result *= i;
  }
}

console.log(result);
