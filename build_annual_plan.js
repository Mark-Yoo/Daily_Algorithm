// 첫 번째 argument로 주어지는 배열은 꼭 맞춰야하는 수업 순서
// 두 번째 argument로 주어지는 배열은 임의의 수업 순서
// 첫 번째 argument로 주어지는 배열의 순서에 맞도록 들어가지 않으면 false, 전부 맞다면 true

function solution(classOrder, totalClass) {
  let answer = true;

  for (let x of totalClass) {
    if (classOrder.includes(x) && classOrder[0] === x) classOrder.shift();
  }
  if (classOrder.length !== 0) answer = false;
  return answer;
}

console.log(solution(["C", "B", "A", "E"], ["C", "B", "D", "A", "G", "E"]));
