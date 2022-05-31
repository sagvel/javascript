import { reverseArr, withdraw, getAdults } from './functions';

// tests for reverseArr function
it('should get reversed Array', () => {
  const result = reverseArr([1, 2, 3]);

  expect(result).toEqual([3, 2, 1]);
});

it('should get reversed Array', () => {
  const result = reverseArr([1, 2, 3, 100, 222]);

  expect(result).toEqual([222, 100, 3, 2, 1]);
});

it('should get null if parametr is not Array', () => {
  const result = reverseArr(12345);

  expect(result).toEqual(null);
});

// tests for withdraw function
it('should get 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it('should get 400', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1000);

  expect(result).toEqual(400);
});

// tests for getAdults function
it('should get object with John Doe and Bob', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get object with Ann', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should get object with Ann, John Doe and Bob', () => {
  const result = getAdults({ Ann: 56, Andrey: 7, 'John Doe': 19, Bob: 18 });

  expect(result).toEqual({ Ann: 56, 'John Doe': 19, Bob: 18 });
});
