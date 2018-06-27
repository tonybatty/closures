const { increase } = require('../src/index.js');

test('increase', function(){
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 12;

  expect(result).toBe(expected);
});
