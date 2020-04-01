// Cyclops numbers

// A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
// A couple examples:
// 101
// 11111111011111111
// You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
// Assume n will be a positive integer.

// 10진수인 숫자 n을 2진수로 표현한 숫자의 정 가운데 숫자가 0이며 이외의 숫자는 모두 1인 경우를 찾아 조건에 부합할 경우 true를, 그렇지 않을 경우 false를 반환하는 알고리즘

function cyclops(n) {
  const toBinary = n.toString(2);
  const binaryArr = toBinary.split('');
  let zeroTotal = 0;
  binaryArr.forEach(num => zeroTotal += parseInt(num) ? 0 : 1);
  // 조건1. 정중앙이 0이기 위해서는 2진수로 만든 문자열의 길이가 홀수여야함 -- 1차 분류
  // 조건2. 첫번째 조건을 만족한다면 정중앙의 숫자가 0인지 확인해야함 -- 2차 분류
  // 조건3. 두 조건을 만족한 상태에서 0의 갯수는 1개여야 한다.
  return toBinary.length % 2 && toBinary[Math.floor(toBinary.length / 2)] === '0' && zeroTotal === 1 ? true : false;
}

console.log(cyclops(1)); //false
console.log(cyclops(5)); //true
console.log(cyclops(3)); //false
console.log(cyclops(13)); //false
console.log(cyclops(27)); //true
console.log(cyclops(2015)); //true
console.log(cyclops(666)); //false
console.log(cyclops(42)); //false
console.log(cyclops(1501)); //false