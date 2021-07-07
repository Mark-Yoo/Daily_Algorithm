// 점수에 맞춰 멘토와 멘티를 정해야 하는 문제
// 멘토의 등수는 모든 테스트에서 멘티보다 높아야 한다.

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      for (let k = 0; k < arr.length; k++) {
        for (let l = 0; l < arr[0].length; l++) {
          if (i === k && j === l) break;
          if (arr[i][j] < arr[k][l]) console.log("멘티", arr[i][j]);
        }
      }
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
