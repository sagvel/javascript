// input: Date
// output: object

export const shmoment = initialDate => {
  const date = new Date(initialDate);
  const getDates = {
    years: date.getFullYear(),
    months: date.getMonth(),
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
  };

  const setNamesMethods = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
  };

  const operations = {
    add(type, value) {
      date[setNamesMethods[type]](getDates[type] + value);
      return this;
    },
    subtract(type, value) {
      date[setNamesMethods[type]](getDates[type] - value);
      return this;
    },
    result() {
      return date;
    },
  };
  console.log(initialDate);
  return operations;
};

// test data
console.log(
  shmoment(new Date(2020, 0, 7, 17, 18, 19, 20))
    .add('years', 2)
    .add('days', 33)
    .add('hours', 3)
    .subtract('minutes', 78)
    .result(),
);
