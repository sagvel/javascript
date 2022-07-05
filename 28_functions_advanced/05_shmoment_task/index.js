// input: Date
// output: object
export const shmoment = initialDate => {
  const date = initialDate;
  const getDates = {
    years: date.getFullYear(),
    months: date.getMonth(),
  };

  const setDates = {
    years: 'setFullYear',
    months: date.setMonth,
  };

  const operations = {
    add(type, value) {
      console.log(setDates[type]);
      date.setDates[type](getDates[type] + value);
      // switch (type) {
      //   case 'years':
      //     date.setDates[type](getDates[type] + value);
      //     break;
      //   case 'months':
      //     date.setMonth(getDates[type] + value);
      //     break;
      //   default:
      //     break;
      // }

      return this;
    },
    result() {
      return date;
    },
  };

  return operations;
};

// test data
console.log(shmoment(new Date(2020, 0, 7, 17, 18, 19, 20)).add('years', 1).result());
