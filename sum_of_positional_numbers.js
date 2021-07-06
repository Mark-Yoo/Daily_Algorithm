// 자연수의 각 자릿수를 더하여 더 큰 숫자를 출력하고 만약 합한 수가 같다면 합하기 전의 숫자가 더 큰 쪽을 출력한다.

// function solution(numArr) {
//   let answer = 0;
//   let biggestNum = 0;

//   for (num of numArr) {
//     let sum = 0;
//     for (let i = 0; i < (num + "").length; i++) {
//       sum += +(num + "")[i];
//     }
//     if (biggestNum < sum) {
//       biggestNum = sum;
//       answer = num;
//     } else if (biggestNum === sum) {
//       answer = Math.max(answer, num);
//     }
//   }

// 번거로운 형변환 없이 숫자만을 계산하여 만든 알고리즘
function solution(numArr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let biggestNum = Number.MIN_SAFE_INTEGER;

  for (num of numArr) {
    let sum = 0;
    let temporaryNum = num;
    while (temporaryNum) {
      sum += temporaryNum % 10;
      temporaryNum = Math.floor(temporaryNum / 10);
    }
    if (sum > biggestNum) {
      biggestNum = sum;
      answer = num;
    } else if (sum === biggestNum) {
      if (num > answer) answer = num;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
let arr2 = [128, 460, 603, 40, 521, 191, 123];
console.log(solution(arr));
console.log(solution(arr2));
