// 4. 선택 정렬
function selectionSort(array) {
  function swapNode(array, index1, index2) {
    let temporaryNode = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryNode;
  }

  for (let i = 0; i < array.length; i++) {
    let minimumNumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if(array[minimunNumIndex] > array[j]) {
        minimumNumIndex = j;
      }
    }
    swapNode(array, i, minimumNumIndex);
  }
  return array;
}

console.log(selectionSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
console.log(selectionSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
