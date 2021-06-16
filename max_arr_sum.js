// 이중배열 격자판을 가지고 있을 때에 가장 큰 수가 되는 합을 구하시오 (가로, 세로, 대각선만 인정)

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  // 열을 저장하는 변수
  let sum1 = 0;
  // 행을 저장하는 변수
  let sum2 = 0;

  // 가로와 세로를 한꺼번에 구하는 이중 for문
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
    sum1 = 0;
    sum2 = 0;
  }

  // 대각선을 구하는 for문
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr1 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr1));
