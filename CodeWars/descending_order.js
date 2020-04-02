// Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// 음수가 아닌 정수를 argument로 받아 내림차순으로 정렬된 수를 다시 만들어 리턴하는 함수를 만들어야 한다.

function descendingOrder(n){
  // 숫자를 iterable하게 만들기 위해 문자열로 변환한 후 split('')를 사용해 각자 나누어진 글자로 존재하는 배열을 만든다. 이후 sort를 이용해 내림차순으로 정렬한후 join('')을 사용해 다시 하나의 문자열로 합친다. 반환해야하는 것은 문자열이 아닌 숫자이므로 +연산자를 이용해 숫자로 타입 변환을 시켜준다.
  return +((n + '').split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(0)) // 0
console.log(descendingOrder(1)) // 1
console.log(descendingOrder(123456789)) // 987654321