// 두번째 인자로 주어진 알파벳까지로의 거리중 최단거리를 구하시오.

function solution(word, alphabet) {
  let answer = [];
  let start = 1000;

  for (let x of word) {
    if (x === alphabet) {
      start = 0;
      answer.push(start);
    } else {
      start++;
      answer.push(start);
    }
  }
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === alphabet) {
      start = 0;
    } else {
      start++;
      answer[i] = Math.min(answer[i], start);
    }
  }

  return answer;
}

let word = "teachermode";
console.log(solution(word, "e"));
