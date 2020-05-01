// Maximum 69 Number

// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation: 
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666. 
// The maximum number is 9969.
// Example 2:

// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:

// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

// 인수로 전달되는 숫자의 각 자릿수는 9 혹은 6이다. 한 번에 한 자릿수만 바꿀 수 있으며 각 자릿수 하나씩만 바꿀 때 이들 중 가장 큰 수를 찾아야 한다.

/**
 * @param {number} num
 * @return {number}
 */

var maximum69Number  = function(num) {
  let maxNum = num;
  for (let i = 0; i < (num + '').length; i++) {
      let curNum = [...(num + '')];
      if (curNum[i] === '6') curNum[i] = '9';
      if (curNum.join('') > maxNum) maxNum = curNum.join('');
  }
  return maxNum;
};