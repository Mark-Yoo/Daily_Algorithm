// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// 함수형 프로그래밍으로 만드는 사칙연산

function zero(fn) {
  return fn ? fn(0) : 0;
}
function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}


function plus(num) {
  return function(num2) {
    return num + num2;
  }
}

function minus(num) {
  return function(num2) {
    return num2 - num;
  }
}
function times(num) {
  return function(num2) {
    return num * num2;
  }
}
function dividedBy(num) {
  return function(num2) {
    return Math.floor(num2 / num);
  }
}

console.log(seven(times(five()))); //35
console.log(four(plus(nine()))); //13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3