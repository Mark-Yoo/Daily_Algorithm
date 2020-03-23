// 4. 삽입 정렬
function swapNum(array, index1, index2) {
  tempNum = array[index1];
  array[index1] = array[index2];
  array[index2] = tempNum;
}

function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i; j >= 0; j--) {
      if(array[j] > array[j + 1]) {
        swapNum(array, j, j + 1);
      }
    } 
  }
  return array;
}

console.log(insertionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(insertionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]