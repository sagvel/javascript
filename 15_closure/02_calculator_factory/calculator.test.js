import { createCalculator } from './app.js';

it('should get add 25', () => {
  const calculator = createCalculator();
  calculator.add(25);
  const result = calculator.getMemo();

  expect(result).toBe(25);
});

it('should get 100 after chain og operations 1000 - 500 + 200 - 600', () => {
  const calculator = createCalculator();
  calculator.add(1000);
  calculator.decrease(500);
  calculator.add(200);
  calculator.decrease(600);
  const result = calculator.getMemo();

  expect(result).toBe(100);
});
