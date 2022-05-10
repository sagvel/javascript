const start = 1;
const end = 100;

let result = 0;

for (let i = start; i <= end; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
    continue;
  }

  if (i % 2 === 0 && i % 4 === 1) {
    result += i;
    continue;
  }

  if (i % 3 === 0) {
    result -= i;
    continue;
  }

  if (i % 4 === 0) {
    result *= i;
    continue;
  }
}
