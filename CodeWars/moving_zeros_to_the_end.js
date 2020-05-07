// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1

// 0 이외의 숫자들은 자리가 바뀌면 안되며, 0은 오른쪽으로 모여있는 배열을 만들어야 한다.

// 첫 번째 코드 - push를 사용하여 0을 다시 만들어 집어넣고 새로운 배열을 만드는 코드

// var moveZeros = function (arr) {
//   const arrLength = arr.length;
//   const arrNozero = arr.filter((num) => num !== 0);
//   const numOfzero = arrLength - arrNozero.length;
//   const result = [...arrNozero];

//   for (let i = 0; i < numOfzero; i++) {
//     result.push(0);
//   }

//   return result;
// };

// 두 번째 코드. 변수 선언이나 push를 사용하지 않고 0이 없는 배열과 0만 있는 배열을 이어붙였다.
var moveZeros = function (arr) {
  return arr.filter((num) => num !== 0).concat(arr.filter((num) => num === 0));
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ];
