// 받아오는 수열 중 연속부분수열의 합이 특정한 숫자가 되는 경우를 모두 찾는 함수를 만드시오.

function solution(sumNum, arr) {
  let answer = 0;
  let pointer1 = 0;
  let pointer2 = 1;
  let temporarySum = arr[pointer1];

  while (pointer1 < arr.length && pointer2 < arr.length) {
    if (temporarySum > sumNum) {
      temporarySum -= arr[pointer1];
      pointer1++;
    } else if (temporarySum < sumNum) {
      temporarySum += arr[pointer2];
      pointer2++;
    }
    if (temporarySum === sumNum) {
      answer++;
      pointer2++;
      temporarySum += arr[pointer2];
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
