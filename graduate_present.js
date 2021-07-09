// 현재 가지고 있는 예산으로 몇 명의 사람들에게 선물을 사줄 수 있을지 구하는 함수 만들기 (하나의 상품을 50% 가격에 구매할 수 있는 쿠폰을 가지고 있다. 배송비는 할인에 포함되지 않는다.)
function solution(budget, arr) {
  let answer = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < arr.length; i++) {
    let totalPrice = arr[i][0] / 2 + arr[i][1];
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (budget - totalPrice >= arr[j][0] + arr[j][1] && i !== j) {
        totalPrice += arr[j][0] + arr[j][1];
        count++;
      }
      if (answer < count) answer = count;
    }
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
