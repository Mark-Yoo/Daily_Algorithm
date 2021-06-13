// 학생들이 일렬로 줄을 설 때에 키가 같거나, 작으면 보이지 않는다. 맨 앞의 학생을 제외한 뒤의 학생들 중 선생님의 시야에 보이는 최대 학생 수를 구하시오.

function solution(arr) {
  // 맨 앞의 학생은 무조건 보이므로 기본값은 1로 설정한다.
  let answer = 1;
  let tallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > tallest) {
      answer += 1;
      tallest = arr[i];
    }
  }

  return answer;
}

let arr1 = [130, 135, 148, 145, 150, 150, 153];

console.log(solution(arr1));
