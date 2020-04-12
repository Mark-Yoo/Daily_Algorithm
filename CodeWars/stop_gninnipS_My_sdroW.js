// Stop gninnipS My sdroW

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// 여러개의 단어로 이루어진 문자열 중 5글자 이상의 단어를 반대로 돌려서 표시하는 알고리즘을 만들어라

function spinWords(str){
  const splitedWords = str.split(' ').map(w => w.split(''));
  const result = splitedWords.map(word => word.length >= 5 ? word.reverse().join('') : word.join('')).join(' ');
  return result;
}

console.log(spinWords("Welcome")); // "emocleW"
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // "This is a test"
console.log(spinWords("This is another test")); // "This is rehtona test"
console.log(spinWords("You are almost to the last test")); //"You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one");