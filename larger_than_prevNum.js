// 앞 숫자보다 큰 숫자일 경우의 수만을 갖는 배열을 반환

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && arr[i] > arr[i - 1]) answer.push(arr[i]);
    else if (i === 0) answer.push(arr[i]);
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
