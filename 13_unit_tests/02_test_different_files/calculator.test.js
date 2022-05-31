import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get array with squared numbers', () => {
  const result = getSquaredArray([1, 10, 3]);

  expect(result).toEqual([1, 100, 9]);
});

it('should get array with odd numbers', () => {
  const result = getOddNumbers([1, 10, 3, 4, 33, 7]);

  expect(result).toEqual([1, 3, 33, 7]);
});

it('should get sum of numbers', () => {
  const result = getSum(10, 33);

  expect(result).toEqual(43);
});
