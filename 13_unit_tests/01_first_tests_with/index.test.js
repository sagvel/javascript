import { getEvenNumbers } from './index';

it('17 equal 17 only', () => {
  expect(17).toEqual(17);
});

it('18 is not equal 17', () => {
  expect(18).not.toBe(17);
});

it('Array with even numbers', () => {
  const result = getEvenNumbers([1, 10, 3, 22, 124, 544, 17]);

  expect(result).toEqual([10, 22, 124, 544]);
});
