// Sort the Odd

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// --- Example --- 
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

// 홀수인 수들만 정렬하여 홀수들이 들어있던 자리에만 순서대로 넣어주되 양수는 그 자리에서 움직이거나 값이 변하면 안된다.

// 첫번째 버전

// Array.prototype.shift()의 특징인 배열의 맨 앞 숫자를 제거하고 제거된 숫자를 리턴한다는 점인데 이 점을 제대로 생각하지 못하고 알고리즘을 작성하였다. 이를 이용하여 더 간략하게 코드를 작성해 보기로 하였다.

// function sortArray(array) {
//   // Return a sorted array.
//   let sortWhole = array.filter(num => num % 2).sort((a, b) => a - b);
//   let result = [];

//   array.forEach(num => {
//     if (num % 2) {
//       result.push(sortWhole[0]);
//       sortWhole.shift(0);
//     } else {
//       result.push(num);
//     }
//   });
//   return result;
// }


// 2차 작성 코드 shift()의 특성을 이용한 덕에 코드가 조금 더 간략해해짐

function sortArray(array) {
  const sortedArr = array.filter(num => num % 2).sort((a, b) => a - b);
  
  return array.map(num => num % 2 ? sortedArr.shift() : num);
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([])); // []