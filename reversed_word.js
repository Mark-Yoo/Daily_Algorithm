// 거꾸로 해도 똑같은 문자열일 경우 True 아닐 경우 False를 반환하는 함수를 만드시오. (대문자와 소문자는 구별하지 않는다.)

// function solution(word) {
//   let answer = false;
//   const lowerCaseWord = word.toLowerCase();

//   if (lowerCaseWord.split("").reverse().join("") === lowerCaseWord)
//     answer = true;

//   return answer;
// }

// 메서드를 사용하지 않고 각각 비교하기
function solution(word) {
  let answer = true;
  const lowerCaseWord = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (lowerCaseWord[i] !== lowerCaseWord[word.length - i - 1])
      return (answer = false);
    if (i > word.length - i - 1) break;
  }

  return answer;
}

let example = "asdffdSA";
let example2 = "asdffdss";
let example3 = "asdsa";
console.log(solution(example));
console.log(solution(example2));
console.log(solution(example3));
