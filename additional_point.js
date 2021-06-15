// 문제를 연속으로 맞출 때마다 가산점이 1점씩 추가로 붙는다. 총점수를 구하시오.

function solution(arr) {
  let answer = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      answer = answer + arr[i] + count;
      count += 1;
    } else {
      count = 0;
    }
  }
  return answer;
}

let arr1 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
let arr2 = [1, 1, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr1));
console.log(solution(arr2));
