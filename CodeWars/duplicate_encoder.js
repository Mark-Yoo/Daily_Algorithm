// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// 둘 이상 중복되는 글자는 ')'로 중복되지 않고 하나씩 나오는 글자는 '('로 대체하여 문자열을 만들어 리턴하는 함수 만들기

function duplicateEncode(word){
  const wordArr = word.toLowerCase().split('');
  let newString = [];
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = i + 1; j < wordArr.length + 1; j++) {
      if (wordArr[i] === wordArr[j]) {
        newString[i] = ')';
        newString[j] = ')';
      } else if (newString[i] === ' ' || wordArr[i] !== wordArr[j]) {
        newString[i] = newString[i] !== ')' ? '(' : ')';
      }
      if (newString[j] === ' ') newString[j] === '(';
    }
  }
  return newString.join('');
}

console.log(duplicateEncode("din")) //"((("
console.log(duplicateEncode("recede")) //"()()()"
console.log(duplicateEncode("Success")) // ")())())"
console.log(duplicateEncode("(( @")) //"))(("