// 2 x n 타일링

// 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

// 타일을 가로로 배치 하는 경우
// 타일을 세로로 배치 하는 경우

// 가로의 길이 n은 60,000이하의 자연수 입니다.
// 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

// 풀이: 길이에 맞춰서 나오는 해결 방법의 수는 피보나치 수열과 동일하다.
// 실수 주의: return 하는 값을 1,000,000,007로 나눈 나머지를 리턴해야 한다는 말에 리턴하는 값만 1,000,000,007로 나누어준다면 숫자가 표현 가능한 수를 벗어나 NaN으로 표시되므로 curNode를 지속적으로 나누어준 나머지 값에 계속 prevNode의 값을 더해주는 방법을 사용해야한다.

function solution(n) {
  let answer = 0;
  let prevNode = 1;
  let curNode = 2;
  let tempNode = 0;
  
  if (n < 3) return answer = n;
  for (let i = 3; i <= n; i++) {
      tempNode = curNode;
      curNode = (prevNode + curNode) % 1000000007;
      prevNode = tempNode;
  }
  answer = curNode;
  return answer;
}

console.log(solution(100)); // 782204094
console.log(solution(1000)); // 107579939
console.log(solution(23)); // 46368
console.log(solution(0)); // 0
console.log(solution(1)); // 1