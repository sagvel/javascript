/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
export const pinger = (count, period) => {
  console.log(count);
  let newCount = count;
  const interval = setInterval(() => {
    newCount -= 1;
    if (newCount > 0) {
      console.log(count);
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
pinger(3, 300); // makes 7 writes with 1500 ms interval
