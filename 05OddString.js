// 5. 이상한 문자열 만들기

// toWeirdCase함수는 문자열을 인수로 전달받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 s가 ‘hello world’라면 첫번째 단어는 ‘HeLlO’, 두번째 단어는 ‘WoRlD’로 바꿔 ‘HeLlO WoRlD’를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

// function toWeirdCase(s) {
//   let sepWords = s.split(' ');
//   let newSentence = '';
//   for (let i = 0; i < sepWords.length; i++) {
//     if (i !== 0) newSentence += ' ';
//     for (let j = 0; j < sepWords[i].length; j++) {
//       newSentence += j % 2 ? sepWords[i][j] : sepWords[i][j].toUpperCase();
//     }
//   }
//   return newSentence;
// }

// console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
// console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

function toWeirdCase(s) {
  const sepWords = s.split(' ').map(sepWord => sepWord.split(''));

  return sepWords.map(sepWord => sepWord.map((letter, i) => i % 2 ? letter : letter.toUpperCase()).join('')).join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'