// Weight for weight

// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes

// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// Don't modify the input
// For C: The result is freed.

// 넘어오는 숫자들은 문자열 형태로 이 문자열로 넘어오는 각 숫자들의 자릿수를 더한 값의 크기에 맞게 정렬을 하여야 한다. 하지만 더한 숫자가 같다면 각 숫자들은 '문자열'로서 '문자열 순서'에 맞게 정렬해야 한다. 숫자로 정렬할 순간과 문자로 정렬할 순간을 제대로 정하지 않으면 결과가 뒤죽박죽이 되는 경우가 생긴다.

function orderWeight(numArr) {
  const reduceFunction = (arr) => {
    return [...arr].reduce((acc, cur) => (+acc) + (+cur));
  }

  return numArr.split(' ').sort((a, b) => +reduceFunction(a) !== +reduceFunction(b) ? (+reduceFunction(a)) - (+reduceFunction(b)) : (a + '') > (b + '') ? 1 : (a + '') < (b + '') ? -1 : 0).join(' ');
}

console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"