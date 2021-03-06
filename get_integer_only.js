// 예제의 문자열에서 숫자만을 추출하여 자연수를 출력하는 solution을 만드시오.

// function solution(string) {
//   let answer = "";

//   answer = parseInt(string.replace(/[a-z]/g, ""));
//   return answer;
// }

function solution(string) {
  let answer = 0;

  for (let x of string) {
    // Number()로 x를 변환하지 않으면 자동형변환으로 인해 answer가 string으로 형변환되므로 꼭 x의 타입을 변환해서 더해야한다.
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  console.log(typeof answer);
  return answer;
}

let str = "asdfg0fdsf10agdsgasd3asdgsd4";
console.log(solution(str));
