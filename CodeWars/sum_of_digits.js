// Sum of digits / Digital Root

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// 두 자릿수 이상의 숫자는 각자의 자릿수를 계속해서 더하는 알고리즘을 만들어야 한다. (재귀함수로 구현하기)

function digital_root(n) {
  let result = n + '';
  if (result.length !== 1) {
    let splitedArr = result.split('');
    result = splitedArr.reduce((acc, cur, i, arr) => acc + (+cur), 0);
    return digital_root(result);
  }
  return +result;
}

console.log(digital_root(16)) // 7
console.log(digital_root(456)) // 6