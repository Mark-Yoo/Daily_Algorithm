// n개의 자연수를 각각 거꾸로 뒤집어 해당 숫자가 소수일 경우 그 소수를 출력하라

function isPrimeNum(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 형변환을 활용한 코드
function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let reversedNum = +(arr[i] + "").split("").reverse().join("");

    if (isPrimeNum(reversedNum)) answer.push(reversedNum);
  }

  return answer;
}

// 숫자만을 조작하여 만든 코드

// function solution(arr) {
//   let answer = [];

//   for (num of arr) {
//     let result = 0;
//     while (num) {
//       let temporaryNum = num % 10;
//       result = result * 10 + temporaryNum;
//       num = parseInt(num / 10);
//     }
//     if (isPrimeNum(result)) answer.push(result);
//   }
//   return answer;
// }

let arr = [32, 55, 62, 250, 370, 200, 30, 100, 302];
console.log(solution(arr));
