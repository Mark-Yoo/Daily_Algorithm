// 2. 이진 탐색
// 이진 탐색은 정렬된 배열의 중간 index를 찾아 찾으려고 하는 target 값과의 비교를 통해 점진적으로 범위를 줄여나가는 방법이다.
function binarySearch(array, target) {
  // 시작점과 끝나는 지점을 지속적으로 바꿔가야하므로 변수로 선언해준다.
  let begin = 0;
  let finish = array.length - 1;
  
  // while문을 이용해 특정 조건에 도달하기 전까지 계속해서 돌린다. 이진 탐색의 경우에는 중간 값이 target값과 같을 때에 나와야 하므로 시작점과 끝나는 지점이 계속해서 달라진다. 결국 두 점이 교차하는 부분이 생기므로 교차하게 되면 while문을 종료한다.
  while(begin <= finish) {
    const middle = Math.floor((begin + finish) / 2);
    if (array[middle] === target) return middle;
    if (array[middle] > target) {
      finish = middle - 1;
    } else {
      begin = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
