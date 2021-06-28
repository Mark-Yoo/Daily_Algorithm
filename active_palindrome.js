// 문자열을 검사하되 받은 문자열 내에서 알파벳만을 가지고 검사한다.

function solution(word) {
  let answer = true;
  word = word.toLowerCase().replace(/[^a-z]/g, "");

  if (word.split("").reverse().join("") !== word) return (answer = false);
  return answer;
}

let word = "got7, BTs, stB, 7ToG";
let word2 = "got7, BTs, stB, 7ToG, Palindrome";
console.log(solution(word));
console.log(solution(word2));
