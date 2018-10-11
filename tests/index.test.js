const { increase, double, total, gibberish, mergeSort, calculator, dogHome } = require('../src/index.js');

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

test('gibberish', function(){
  const string = "orange";
  const inner = gibberish();
  const result = inner(string);

  const expected = " orange";

  expect(result).toBe(expected);
})

test('gibberish2', function(){
  const array = ["orange", "blue", "red", "yellow"];
  const inner = gibberish();
  const result = inner(array);

  const expected = "orange. blue. red. yellow";

  expect(result).toBe(expected);
})

test('mergeSort', function(){
  const a = 1;
  const b = 2;
  const c = 3;
  const inner = mergeSort();
  const result1 = inner(c);
  const result2 = inner(a);
  const result3 = inner(b);

  const expected = [1, 2, 3];

  expect(result3).toEqual(expected);
})

test('calculator', function() {
  const num1 = 100;
  const num2 = 27;
  const operator = "+";
  const inner = calculator();
  const result = inner(num1, num2, operator);
  const expected = 127;
  expect(result).toBe(expected);

})

test("dogHome", function(){
  const dogs={
    1:{
      name: 'Snoopy',
      breed: 'setter',
      colour: 'red',
      location: 'Surrey'
  },
    2:{
      name: 'Buster',
      breed: 'rottweiler',
      colour: 'black and brown',
      location: 'Surrey'
  }
};

  const inner = dogHome();
  const result = inner(dogs);
  const expected = {
    Surrey: ['Snoopy', "Buster"]
    }
  expect(result).toEqual(expected);
})