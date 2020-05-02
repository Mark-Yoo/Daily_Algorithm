// Count Negative Numbers in a Sorted Matrix

// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

// Return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
// Example 3:

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3
// Example 4:

// Input: grid = [[-1]]
// Output: 1

// 배열 안에 배열을 갖는 자료구조 내부에서 총 음수의 갯수가 몇 개인지 맞추시오.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let totalNegatives = 0;
  grid.forEach(inner => inner.forEach(num => num < 0 ? totalNegatives += 1 : 0));
  return totalNegatives;
};