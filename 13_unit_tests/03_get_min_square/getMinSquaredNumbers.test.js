import getMinSquaredNumbers from './getMinSquaredNumbers';

it('should get square of minimal numbers', () => {
  const result = getMinSquaredNumbers([10, 33, -2, 2]);

  expect(result).toEqual(4);
});

it('should get null if paramert is not array', () => {
  const result = getMinSquaredNumbers(123);

  expect(result).toEqual(null);
});

it('should get null if paramert is empty array', () => {
  const result = getMinSquaredNumbers([]);

  expect(result).toEqual(null);
});
