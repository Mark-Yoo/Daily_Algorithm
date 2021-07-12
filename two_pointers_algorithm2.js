//  A, B 두 집합이 주어지면 두 집합의 공통 원소를 구하는 함수를 만드시오.

function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    } else if (arr1[pointer1] > arr2[pointer2]) {
      pointer2++;
    } else if (arr1[pointer1] === arr2[pointer2]) {
      answer.push(arr1[pointer1]);
      pointer2++;
    }
  }

  return answer;
}

let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
