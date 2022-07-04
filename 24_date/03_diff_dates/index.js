// input: Date, Date
// output: string

export function getDiff(startDate, endDate) {
  const diffOfDates = Math.abs(startDate.getTime() - endDate.getTime());
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMin = 1000 * 60;
  const oneSec = 1000;
  const diffDays = Math.trunc(diffOfDates / oneDay);
  const diffHours = Math.trunc((diffOfDates - oneDay * diffDays) / oneHour);
  const diffMins = Math.trunc((diffOfDates - oneDay * diffDays - diffHours * oneHour) / oneMin);
  const diffSeconds = Math.round(
    (diffOfDates - oneDay * diffDays - diffHours * oneHour - diffMins * oneMin) / oneSec,
  );
  // test data inside function
  // console.log(diffOfDates);
  // console.log(diffDays);
  // console.log(diffHours);
  // console.log(diffMins);
  // console.log(diffSeconds);
  // console.log(`${diffDays}d ${diffHours}h ${diffMins}m ${diffSeconds}s`);
  return `${diffDays}d ${diffHours}h ${diffMins}m ${diffSeconds}s`;
}

// test data
getDiff(new Date(), new Date(2022, 5, 25));
getDiff(new Date(2022, 5, 25), new Date());
