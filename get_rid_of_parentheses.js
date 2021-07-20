// 괄호 사이에 존재하는 문자들을 제거하고 괄호 밖에 있는 문자열만을 함수를 작성하시오.
function solution(string) {
  let answer;
  let tempArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ")") {
      tempArr.push(string[i]);
    } else {
      for (let j = tempArr.length - 1; j >= 0; j--) {
        if (tempArr[j] !== "(") {
          tempArr.pop();
        } else {
          tempArr.pop();
          break;
        }
      }
    }
  }
  answer = tempArr.join("");
  return answer;
}

let string = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(string));
