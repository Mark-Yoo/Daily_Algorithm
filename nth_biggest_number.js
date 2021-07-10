// 1부터 100 사이의 자연수 n개 중에는 같은 숫자가 중복으로 여러장 있을 수 있으며 이 중 3장을 뽑아 합했을 때 m번째로 큰 수를 찾으시오.
function solution(n, m, arr) {
  let answer = 0;
  let count = 1;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (count === m) {
          return (answer += arr[i] + arr[j] + arr[k]);
        }
        count++;
      }
    }
  }
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
