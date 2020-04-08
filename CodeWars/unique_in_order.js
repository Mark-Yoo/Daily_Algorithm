// Unique in order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// 인자로 받는 값은 이터러블한 값으로 이 값을 받아 연속적으로 반복되는 문자나 숫자를 하나만 남기고 전부 제거한다.

// let uniqueInOrder = function(iterable){
//   const newArr = typeof(iterable) !== 'object' ? iterable.split('') : iterable;
//   let reduceArr = newArr.reduce((acc, cur, i, arr) => {
//     if(arr[i] !== arr[i + 1]) acc.push(cur);
//     return acc;
//   }, []);
  
//   return reduceArr;
// }

// 코드를 조금 더 간략하게 만들어보자. 인수는 iterable이므로 스프레드 문법을 이용해 새로운 배열을 만든다.
let uniqueInOrder = function(iterable) {
  const newArr = [...iterable].reduce((acc, cur, i, arr) => {
    if (arr[i] !== arr[i + 1]) acc.push(cur);
    return acc;
  }, []);
  return newArr;
}

// For example:

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]