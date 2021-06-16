// 입력된 점수들을 바탕으로 각 인원의 등수를 가진 배열을 구하시오.

function solution(arr) {
  let answer = [];
  let grade = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) grade++;
    }
    answer.push(grade);
    grade = 1;
  }

  return answer;
}

let arr1 = [87, 89, 92, 100, 76];
let arr2 = [92, 92, 92, 100, 76];

console.log(solution(arr1));
console.log(solution(arr2));
