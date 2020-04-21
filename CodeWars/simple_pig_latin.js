// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// 각 자리의 글자를 다음 인덱스의 글자로 바꾸고 맨 끝 인덱스의 글자는 0번째 인덱스의 글자로 치환한다. 이후에 각 글자에 'ay'라는 글자를 붙인다. 만약 특수 문자가 온다면 'ay' 없이 특수문자만 반환한다.

function pigIt(str){  
  // 영어를 걸러내기 위한 정규표현식
  const regExp = /^[a-zA-Z]*$/;

  // 문자를 스트레드 문법을 통해 배열로 내부 배열을 돌면서 각 자릿수를 바꾼다.
  const mutatedStr = str.split(' ').map(word => [...word].map((letter, i, arr) => i !== arr.length - 1 ? arr[i + 1] : arr[0]).join(''));

  // 마지막으로 문장을 합치기 전에 정규표현식을 테스트해서 어디에 'ay'를 붙일것인지 정한다.
  return mutatedStr.map(word => word += regExp.test(word) ? 'ay' : '').join(' ');
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay')
console.log(pigIt('Quis custodiet ipsos custodes ?')); // uisQay ustodietcay psosiay ustodescay ?