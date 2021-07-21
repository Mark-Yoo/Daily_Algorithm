// 후위식 연산의 결과를 출력하는 함수를 만드시오
function solution(num) {
  let answer;
  let tempArr = [];

  for (let x of num) {
    if (!isNaN(x)) tempArr.push(+x);
    else {
      let secondNum = tempArr.pop();
      let firstNum = tempArr.pop();
      if (x === "+") tempArr.push(firstNum + secondNum);
      else if (x === "-") tempArr.push(firstNum - secondNum);
      else if (x === "*") tempArr.push(firstNum * secondNum);
      else if (x === "/") tempArr.push(firstNum / secondNum);
    }
  }
  answer = tempArr[0];
  return answer;
}

let num = "352+*9-";
console.log(solution(num));
