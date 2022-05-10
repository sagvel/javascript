let sumOdd = 0;

for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    sumOdd += i;
    console.log('Found');
    if (sumOdd * 5 > 5000) {
      console.log('Bigger');
    } else {
      console.log('Smaller or equal');
    }
  }
}
