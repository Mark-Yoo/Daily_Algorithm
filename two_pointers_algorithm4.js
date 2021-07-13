// 주어진 숫자보다 이하가 되는 경우의 수를 구하시오.

function solution(limit, arr) {
  let answer = 0;
  let pointer1 = 0;
  let temporarySum = 0;

  for (let pointer2 = 0; pointer2 < arr.length; pointer2++) {
    temporarySum += arr[pointer2];
    while (temporarySum > limit) {
      temporarySum -= arr[pointer1];
      pointer1++;
    }
    answer += pointer2 - pointer1 + 1;
  }
  return answer;
}

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
