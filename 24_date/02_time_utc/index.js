const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

// input: date object
// output: string
export function getGreenwichTime(date) {
  return formatter.format(date);
}

// test data
// console.log(getGreenwichTime(new Date()));
