// 문자열을 압축하여 2개 이상인 알파벳의 다음에 해당 알파벳의 갯수가 숫자로 따라온다.

function solution(str) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count !== 1) {
        answer += count;
        count = 1;
      }
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
