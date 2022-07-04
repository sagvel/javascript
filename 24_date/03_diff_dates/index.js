// input: Date, Date
// output: string
// refactor after menthor review
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const getDiff = (startDate, finishDate) => {
  const difference = Math.abs(finishDate - startDate);

  const daysLeft = Math.floor(difference / DAY);
  const hoursLeft = Math.floor((difference % DAY) / HOUR);
  const minutesLeft = Math.floor((difference % HOUR) / MINUTE);
  const secondsLeft = Math.floor((difference % MINUTE) / SECOND);

  return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
};

// test data
getDiff(new Date(), new Date(2022, 5, 25));
getDiff(new Date(2022, 5, 25), new Date());
