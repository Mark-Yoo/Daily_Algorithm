// Roman numerals decoder

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21

// 문자열로 이루어진 로마숫자를 받아 아라비아 숫자로 변환하는 알고리즘 만들기

function solution(roman){
  const symbolList = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  const splitedArr = roman.split('');
  return splitedArr.reduce((acc, cur, i, arr) => symbolList[arr[i]] > symbolList[arr[i + 1]] ? acc + symbolList[cur] : symbolList[arr[i]] < symbolList[arr[i + 1]] ? acc - symbolList[cur] : acc + symbolList[cur], 0);
}

console.log(solution('XXI')); // 21
console.log(solution('I')); // 1
console.log(solution('IV')); // 4
console.log(solution('MMVIII')); // 2008
console.log(solution('MDCLXVI')); // 1666