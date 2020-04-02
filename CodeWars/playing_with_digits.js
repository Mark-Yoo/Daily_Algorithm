// Playing with digits

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// 항상 양의 정수로 들어오는 n의 각 자릿수를 p, p+1, p+2, (...) 만큼 제곱하여 더할경우 n * k의 값이 되는 숫자들이 있다. 여기서 k가 정수일 경우 k를 리턴, k가 정수가 아닐 경우 -1을 리턴하는 함수를 만들어야 한다.

function digPow(n, p){
  // 각 숫자의 자릿수를 배열에 하나씩 담는다.
  const splitNArr = ((n + '').split('')).map(str => +str);
  // 고차함수 reduce를 사용해 각 숫자를 p + index만큼 제곱한 값을 전부 더해준 뒤 이를 다시 n으로 나눈다.
  const adderResult = (splitNArr.reduce((acc, cur, i) => acc + Math.pow(cur, p + i), 0)) / n;
  // 만약 adderResult의 값이 정수라면 k를 의미하는 adderResult를, 정수가 아니라면 -1을 리턴한다.
  return Number.isInteger(adderResult) ? adderResult : -1;
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51