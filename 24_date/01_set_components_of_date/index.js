// input: Date object, number
// output: string

export function dayOfWeek(date, days) {
  const weekDay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDay[new Date(dateInFuture).getDay()];
}

// test data
// dayOfWeek(new Date(2022, 6, 4), 5);
// dayOfWeek(new Date(2021, 6, 4), 5);
