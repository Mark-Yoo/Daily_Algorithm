// Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.
 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

// 배열로 들어오는 숫자는 각각 자릿수가 랜덤한 숫자들이다. 이 숫자들 중 자릿수가 짝수인 숫자들의 갯수를 구하여라

var findNumbers = function(nums) {
  return nums.map(nums => (nums + '').length).filter(num => !(num % 2)).length;
};