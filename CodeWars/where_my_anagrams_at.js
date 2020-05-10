// Where my anagrams at?

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// still working on the codes

// 모든 글자를 sort처리 하여 비교

function anagrams(word, words) {
  const sortedWord = word
    .split("")
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .join("");
  const sortedWords = [...words].map((innerword) =>
    innerword
      .split("")
      .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
      .join("")
  );

  console.log(sortedWords.map((w, i) => (w === sortedWord ? i : "")));
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
