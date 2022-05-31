import { calc } from './calculator';

it('should get sum of numbers', () => {
  const result = calc('2 + 2');

  expect(result).toEqual('2 + 2 = 4');
});
it('should get subtraction of numbers', () => {
  const result = calc('2 - 2');

  expect(result).toEqual('2 - 2 = 0');
});
it('should get multiply of numbers', () => {
  const result = calc('2 * 2');

  expect(result).toEqual('2 * 2 = 4');
});
it('should get division of numbers', () => {
  const result = calc('2 / 2');

  expect(result).toEqual('2 / 2 = 1');
});
it('should get null if parametr is not string', () => {
  const result = calc(2 / 2);

  expect(result).toEqual(null);
});
