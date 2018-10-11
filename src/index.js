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

// Create a function which stores an empty array. Return an inner function which accepts a number as an argument. The inner function should insert the number into the array in descending order and return the highest number from array

function mergeSort(num) {
  let arr = [];

  function inner(num){
    arr.push(num);
    arr.sort((a,b)=>a-b);
    return arr;
  }
  return inner;
}

exports.mergeSort = mergeSort;

// Create a function which stores a total number. It should return an inner function which should accept 3 parameters: 2 numbers and a string representing an operator +, -, * or /. It should perform the operation indicated by the operator add the result to total. Return the new total.

function calculator(num1, num2, operator) {
  let total = 0;

  function inner(num1, num2, operator){
    switch (operator) {
      case "+":
        total = num1 + num2;
        break;
      case "-":
        total = num1 - num2;
        break;
      case "/":
        total = num1 / num2;
        break;
      default:
        total = num1 * num2;
    }
    return total;
  }
  return inner;
}

exports.calculator = calculator;

function dogHome(dogs){
  let result = {}

  function inner(dogs){
    Object.keys(dogs).forEach(key =>{
      if(!result.hasOwnProperty([dogs[key].location])){
        result[dogs[key].location]=[dogs[key].name]
      } else{
        result[dogs[key].location].push(dogs[key].name)
      }
    })
    return result
  }
  return inner;
}

exports.dogHome = dogHome;