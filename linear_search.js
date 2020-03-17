// 1. 선형 탐색
// 선형탐색은 처음부터 순차적으로 검색을 해나가는 과정으로 하나하나 맞추어가므로 자료랑이 커질수록 시간이 오래 걸릴 확률이 높다.
function linearSearch(array, target) {
  let searchedTarget = '';

  for(let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      searchedTarget = i;
      break;
    } else if (searchedTarget === ''){
      searchedTarget = -1;
    }
  }

  return searchedTarget;
}

function linearSearch(array, target) {
  for(let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1
