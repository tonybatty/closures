// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase(){

  let number = 3;

  function inner(newNumber){
    number = newNumber + number;
    return number;
  }

  return inner;
}

exports.increase = increase;

// Create a function which stores a number. Return an inner function which doubles the number and returns it

function double() {

  let number = 2;

  function inner(newNumber) {
    number = newNumber * number;
    return number;
  }

  return inner;
}

exports.double = double;

// Create a function which receives and stores total number. Return an inner function which accepts an array of numbers. The inner function should add all the numbers in array, add them to total and return the new total.

function total(totalNumber){
  let total = totalNumber;

  function inner(arrNum){
    total += arrNum.reduce((a,b)=>a+b)
    return total;
  }
  
return inner;
}

exports.total = total;