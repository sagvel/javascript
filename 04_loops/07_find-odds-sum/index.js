let sumOdd = 0;

for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    sumOdd += i;
    console.log('Found');
  }
  if (i % 2 === 1 && sumOdd * 5 > 5000) {
    console.log('Bigger');
  } else if (i % 2 === 1 && sumOdd * 5 < 5000) {
    console.log('Smaller or equal');
  }
}
