// 막대기 자르기
function solution(lazer) {
  let answer = 0;
  let tempArr = [];

  for (let i = 0; i < lazer.length; i++) {
    if (lazer[i] === "(") {
      tempArr.push(lazer[i]);
    } else {
      if (lazer[i - 1] === "(") {
        tempArr.pop();
        answer += tempArr.length;
      } else {
        tempArr.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

let lazer = "()(((()())(())()))(())";
console.log(solution(lazer));
