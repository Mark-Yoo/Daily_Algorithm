// 예제의 문자열에서 숫자만을 추출하여 자연수를 출력하는 solution을 만드시오.

function solution(string) {
  let answer = "";

  answer = parseInt(string.replace(/[a-z]/g, ""));
  return answer;
}

let str = "asdfg0fdsf10agdsgasd3asdgsd4";
console.log(solution(str));
