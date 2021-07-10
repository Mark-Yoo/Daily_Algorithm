// 1부터 100 사이의 자연수 n개 중에는 같은 숫자가 중복으로 여러장 있을 수 있으며 이 중 3장을 뽑아 합했을 때 m번째로 큰 수를 찾으시오.

// 이전의 중복을 잡지 못하는 방식을 보완한 방식
function solution(n, m, arr) {
  let answer = 0;
  let temporarySum = 0;
  let count = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (temporarySum !== arr[i] + arr[j] + arr[k]) {
          temporarySum = arr[i] + arr[j] + arr[k];
          count++;
        }
        if (count === m) {
          answer = temporarySum;
        }
      }
    }
    return answer;
  }
}

// Set 생성자 함수를 활용하여 임의의 자료구조를 만들어 중복값을 제거하고 모든 결과값을 구하는 방법
// 이전의 방법은 중복값이 없을 경우에는 문제가 없으나, 중복값이 있을 경우 순서가 뒤바뀔 수 있으므로 문제의 여지가 있는 코드이다.
// function solution(n, m, arr) {
//   let answer = 0;
//   let temporaryStructure = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         temporaryStructure.add(arr[i] + arr[j] + arr[k]);
//       }
//     }
//   }
//   let sortedStructure = Array.from(temporaryStructure).sort((a, b) => b - a);
//   answer = sortedStructure[m - 1];
//   return answer;
// }

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
