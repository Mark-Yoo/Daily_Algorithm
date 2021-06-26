// 거꾸로 해도 똑같은 문자열일 경우 True 아닐 경우 False를 반환하는 함수를 만드시오. (대문자와 소문자는 구별하지 않는다.)

function solution(word) {
  let answer = false;
  const lowerCaseWord = word.toLowerCase();

  if (lowerCaseWord.split("").reverse().join("") === lowerCaseWord)
    answer = true;

  return answer;
}

let example = "asdffdSA";
let example2 = "asdffdss";
console.log(solution(example));
console.log(solution(example2));
