// input: Date
// output: object
export const shmoment = initialDate => {
  const date = initialDate;
  const getDates = {
    years: date.getFullYear(),
    months: date.getMonth(),
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    milliseconds: date.getMilliseconds(),
  };

  // const setDates = {
  //   years: 'setFullYear',
  //   months: date.setMonth,
  // };

  const operations = {
    add(type, value) {
      // console.log(setDates[type]);
      // date.setDates[type](getDates[type] + value);
      switch (type) {
        case 'years':
          date.setFullYear(getDates[type] + value);
          break;
        case 'months':
          date.setMonth(getDates[type] + value);
          break;
        case 'days':
          date.setDate(getDates[type] + value);
          break;
        case 'hours':
          date.setHours(getDates[type] + value);
          break;
        case 'minutes':
          date.setMinutes(getDates[type] + value);
          break;
        case 'seconds':
          date.setSeconds(getDates[type] + value);
          break;
        case 'milliseconds':
          date.setMilliseconds(getDates[type] + value);
          break;
        default:
          break;
      }

      return this;
    },
    subtract(type, value) {
      switch (type) {
        case 'years':
          date.setFullYear(getDates[type] - value);
          break;
        case 'months':
          date.setMonth(getDates[type] - value);
          break;
        case 'days':
          date.setDate(getDates[type] - value);
          break;
        case 'hours':
          date.setHours(getDates[type] - value);
          break;
        case 'minutes':
          date.setMinutes(getDates[type] - value);
          break;
        case 'seconds':
          date.setSeconds(getDates[type] - value);
          break;
        case 'milliseconds':
          date.setMilliseconds(getDates[type] - value);
          break;
        default:
          break;
      }

      return this;
    },
    result() {
      return date;
    },
  };

  return operations;
};

// test data
console.log(
  shmoment(new Date(2020, 0, 7, 17, 18, 19, 20))
    .add('years', 1)
    .add('hours', 3)
    .subtract('minutes', 78)
    .result(),
);
