// 막대기 자르기
function solution(lazer) {
  let answer = 0;
  let tempArr = [];

  for (let i = 0; i < lazer.length; i++) {
    if (lazer[i] === "(") {
      tempArr.push(lazer[i]);
    } else {
      tempArr.pop();
      if (lazer[i - 1] === "(") {
        answer += tempArr.length;
      } else {
        answer += 1;
      }
    }
  }

  return answer;
}

let lazer = "()(((()())(())()))(())";
console.log(solution(lazer));
