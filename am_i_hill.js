// 2차원 배열 격자판에서 사방의 숫자보다 큰 숫자일 경우 이 숫자는 '봉우리'가 된다. 봉우의 갯수를 구하시오.

function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let horizontal = [-1, 0, 1, 0];
  let vertical = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + horizontal[k];
        let ny = j + vertical[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

const arr1 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr1));
