// 1, 2, 3 순서대로 2는 1을 이기고 3은 2를 이긴다. 1은 3을 이긴다고 하였을 때에 승자를 구하시오. (같은 숫자일 경우 Draw)

function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] === 3 && arr2[i] === 1) || arr1[i] < arr2[i]) answer.push("B");
    else if (arr1[i] === arr2[i]) answer.push("D");
    else answer.push("A");
  }

  return answer;
}

let arr1 = [2, 3, 3, 1, 3];
let arr2 = [1, 1, 2, 2, 3];

console.log(solution(arr1, arr2));
