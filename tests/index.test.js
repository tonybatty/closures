const { increase, double, total } = require('../src/index.js');

test('increase', function(){
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 13;

  expect(result).toBe(expected);
});

test('double', function(){
  const arg = 10;
  const inner = double();
  const result = inner(arg);

  const expected = 20;

  expect(result).toBe(expected);
})

test('total', function(){
  const totalNumber = 90;
  const arrNum = [1, 2, 3, 4];
  const inner = total(totalNumber);
  const result = inner(arrNum);

  const expected = 100;

  expect(result).toBe(expected);
})