// 두 배열을 하나의 배열로 정렬하며 합치는 방법을 구현하시오

// two pointer 알고리즘을 사용하면 다중for문을 사용하는 문제를 단 한 번 for문을 사용한 효과로 문제 해결이 가능해지기도 한다.
function solution(arr1, arr2) {
  let answer = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      answer.push(arr1[pointer1]);
      pointer1++;
    } else {
      answer.push(arr2[pointer2]);
      pointer2++;
    }
  }
  while (pointer1 < arr1.length) {
    answer.push(arr1[pointer1]);
    pointer1++;
  }
  while (pointer2 < arr2.length) {
    answer.push(arr2[pointer2]);
    pointer2++;
  }

  return answer;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
