// input: number
// output: object
function calc(initialValue) {
  let value = initialValue;

  const calculator = {
    add(number) {
      value += number;
      return this;
    },
    subtract(number) {
      value -= number;
      return this;
    },
    mult(number) {
      value *= number;
      return this;
    },
    div(number) {
      value /= number;
      return this;
    },
    result() {
      return value;
    },
  };

  return calculator;
}

// test data
const res = calc(3).add(2).mult(4).div(10).subtract(5).result(); // -3
console.log(res); // -3
const res2 = calc(-Infinity).add(4).result(); // -Infinity
console.log(res2); // -Infinity
