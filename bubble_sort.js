// 3. 버블소트
function bubbleSort(array) {
  function swapNode(array, index1, index2) {
    temporaryNode = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryNode;
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        swapNode(array, j, j + 1);
      }
    }
  }
  console.log(array);
}

console.log(bubbleSort([2, 4, 5, 1, 3]));     // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 2, 1, 3, 4, 6]));  // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([3, 1, 0, -1, 4, 2])); // [-1, 0, 1, 2, 3, 4]
