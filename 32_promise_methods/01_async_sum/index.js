// input: numbers
// output: number

const getSum = numbers =>
  numbers.filter(number => !isNaN(number)).reduce((acc, val) => acc + Number(val), 0);

// input: promises
// output: promise

export const asyncSum = (...numberPromise) => {
  return Promise.all(numberPromise)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};
