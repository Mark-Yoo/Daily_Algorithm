// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// 한 숫자를 제외한 모든 숫자가 같은 배열을 가지고 다른 숫자 하나를 찾는 알고리즘을 만들어야 한다.

function findUniq(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  
  return sortedArr[0] !== sortedArr[1] ? sortedArr[0] : sortedArr[sortedArr.length - 1];
}

console.log(findUniq([ 0, 1, 0 ])); //  1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); //  2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10
