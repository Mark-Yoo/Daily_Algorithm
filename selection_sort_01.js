// 선택정렬로 오름차순으로 정렬하는 함수를 만드시오.
function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
      console.log(arr);
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
