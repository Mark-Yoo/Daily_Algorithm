// Find the odd int

// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// 숫자 여러개로 이루어진 배열 안에는 무조건 하나의 홀수 갯수만큼 반복되는 숫자가 포함되어 있다. 이 숫자를 찾아내는 알고리즘을 작성해야 한다.

// 첫 번째 방법
// function findOdd(A) {
//   let numOfOdd = 1;
//   let oddNum = 0;

//     A.sort((a, b) => a - b).forEach((num, i, arr) => {
//     if (arr[i] === arr[i + 1]) {
//       numOfOdd += 1;
//     } else if (numOfOdd % 2){
//       oddNum = arr[i];
//       numOfOdd = 1;
//     } else {
//       numOfOdd = 1;
//     }
//   });
//   return oddNum;
// }

// 두 번째 방법

// XOR 연산자를 이용하는 방법으로 두 수의 이진 표기법의 각 자릿수를 비교하고 같다면 0, 같지 않다면 1을 반환하는 방법을 이용한다. 결국 같은 수의 갯수가 짝수라면 서로 XOR 연산자로 계산될 때마다 0을 반환하게 되므로 마지막에 남은 숫자는 홀수인 숫자가 된다.

function findOdd(A) {
  return A.reduce((acc, cur) => acc ^ cur);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); // 5
console.log(findOdd([10])) // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1])) // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10])) // 1