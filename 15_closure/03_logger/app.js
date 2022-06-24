export const createArrayOfFunctions = num => {
  const result = [];

  if (num === undefined) {
    return result;
  }

  if (typeof num !== 'number') {
    return null;
  }

  for (let i = 0; i < num; i += 1) {
    result.push(function () {
      return i;
    });
  }

  return result;
};
