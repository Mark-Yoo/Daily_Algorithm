// 1. 짝수와 홀수
// if문
function evenOrOdd(num) {
  if (num % 2) {
    return 'Odd';
  } else {
    return 'Even';
  }
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd2(num) {
  return num % 2 ? 'Odd' : 'Even';
}

console.log(evenOrOdd2(2)); // Even
console.log(evenOrOdd2(3)); // Odd
console.log(evenOrOdd2(1000)); // Even
