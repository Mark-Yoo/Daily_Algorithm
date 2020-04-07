// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// 알파벳의 모든 글자를 하나 이상씩 가지고 있는 문장을 pangram이라고 부르며 파라미터로 전달 되는 문장이 pangram이 맞는지 확인하는 알고리즘 만들어야 한다.

function isPangram(string){
  const lowercaseString = string.toLowerCase();
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  
  return alphabets.split('').every(alphabet => lowercaseString.indexOf(alphabet) !== -1);
}

var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)) // true
var string = "This is not a pangram."
console.log(isPangram(string)) // false