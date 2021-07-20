// 괄호의 쌍이 제대로 맞는지 체크하는 함수를 만드시오
function solution(parentheses) {
  let answer = true;
  let tempArr = [];

  for (let x of parentheses) {
    if (tempArr.length === 0 && x === ")") return (answer = false);
    if (x === "(") {
      tempArr.push("(");
    } else {
      tempArr.pop();
    }
  }

  if (tempArr.length) answer = false;
  return answer;
}

let parentheses = "(()(()))(()";
console.log(solution(parentheses));
