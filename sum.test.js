const sum = require('./sum');

test('adds no string to give 0', () => {
  expect(sum('')).toEqual(0);
});

test('adds one number gives the same number', () => {
  expect(sum('1')).toEqual(1);
});

test('adds 1,2 to equal 3', () => {
  expect(sum('1,2')).toEqual(3);
});

test('include new line', () => {
  expect(sum('1\n2,3')).toEqual(6);
});
