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

// Create a function which stores an empty string. Return an inner function which can accept either a string or an array of strings. If it's a string, add it to existing string separated by a space ' '. If it's an array of strings join them using a space, append to existing string separated by a space and add a fullstop . at the end. The inner function should return the new resulting string.

function gibberish(text) {
  let string = '';

  function inner(text) {
    if (typeof text === "string") {
      return string += " " + text;
    }

    return string += text.join(". ");
  }
  return inner;
}

exports.gibberish = gibberish;