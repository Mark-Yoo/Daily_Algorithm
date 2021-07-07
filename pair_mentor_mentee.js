// 점수에 맞춰 멘토와 멘티를 정해야 하는 문제
// 멘토의 등수는 모든 테스트에서 멘티보다 높아야 한다.

function solution(arr) {
  let answer = 0;
  let exampleArr = [];

  for (let i = 1; i <= arr[0].length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      let count = 0;
      for (let k = 0; k < arr.length; k++) {
        let mentori = 0;
        let menteej = 0;
        if (i === j) break;
        for (let l = 0; l < arr[0].length; l++) {
          if (arr[k][l] === i) mentori = l;
          if (arr[k][l] === j) menteej = l;
        }
        console.log("mentor", i, "mentee", j);
        console.log("mentorG", mentori, "menteeG", menteej);
        if (mentori < menteej) count++;
      }
      if (count === arr.length) {
        exampleArr.push([i, j]);
        console.log(exampleArr);
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
