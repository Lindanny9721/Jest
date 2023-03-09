const sum = require('./sum');
const divide = require('./divide');
const multiply = require('./multiply');
const subtraction = require('./subtraction');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 2 / 1 to equal 2', () => {
    expect(divide(2, 1)).toBe(2);
  });
  test('adds 2 * 1 to equal 2', () => {
    expect(multiply(2, 1)).toBe(2);
  });
  test('adds 2 - 1 to equal 1', () => {
    expect(subtraction(2, 1)).toBe(1);
  });