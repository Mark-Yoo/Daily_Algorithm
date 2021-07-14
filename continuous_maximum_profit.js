// n일 동안의 매출기록 중 연속되는 k일 동안의 최대 매출액이 얼마인지 구하는 함수를 작성하시오.

function solution(days, arr) {
  let answer = 0;
  let sum = 0;
  let originalDays = days;

  for (let i = 0; i < days; i++) sum += arr[i];
  answer = sum;
  while (days !== arr.length) {
    sum += arr[days] - arr[days - originalDays];
    console.log("day", days, arr[days], "day-", days - originalDays);
    if (sum > answer) answer = sum;
    days++;
  }
  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, arr));
