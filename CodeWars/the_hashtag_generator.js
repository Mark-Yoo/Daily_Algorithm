// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// 인수로 전달되는 문자열들의 각 단어의 첫번째 글자는 대문자, 문자의 시작은 '#'를 포함해야 하며, 글자의 사이에 공백이 있으면 안된다.. 또한 결과물의 길이가 140자를 넘어가면 안된다.

function generateHashtag (str) {
  if (!str.trim().length) return false;
  let result = '#';
  result += str.split(' ').map((word, i) => [...word].map((letter, i) => !i ? letter.toUpperCase() : letter).join('')).join('');
  if (result.length > 140) return false;
  return result;
}

console.log(generateHashtag("")); // "Expected an empty string to return false"
console.log(generateHashtag("     ")); // "Still an empty string"
console.log(generateHashtag("Do We have A Hashtag"));  // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning."
console.log(generateHashtag("Codewars")); // "#Codewars", "Should handle a single word."
console.log(generateHashtag("Codewars Is Nice")) // "#CodewarsIsNice", "Should remove spaces."
console.log(generateHashtag("Codewars is nice")); // "#CodewarsIsNice", "Should capitalize first letters of words."
console.log(generateHashtag("code" + "     " + "wars")); // "#CodeWars"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); // false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("aaaaaaaa")); // "#A" + "a".repeat(138), "Should work"
console.log(generateHashtag("a".repeat(140))); // false, "Too long"