// input: Date
// output: object
export const shmoment = initialDate => {
  const date = initialDate;
  const getDatas = {
    years: date.getFullYear(),
    months: date.getMonth(),
  };

  const setDatas = {
    years: date.setFullYear,
    months: date.setMonth,
  };

  const operations = {
    add(type, value) {
      if (type === 'years') {
        date.setFullYear(getDatas[type] + value);
      }
      return this;
    },
    result() {
      return date;
    },
  };

  return operations;
};

// shmoment(new Date(2020, 0, 7, 17, 18, 19)).result();
console.log(shmoment(new Date(2020, 0, 7, 17, 18, 19, 20)).add('years', 1).result());
