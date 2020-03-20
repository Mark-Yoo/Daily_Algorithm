// Set 생성자 함수를 사용하면 중복값을 제외하고 유일한 값만을 내보낸다.
// Set 생성자 함수를 사용하여 중복값을 제외하고 Rest 파라미터를 이용하여
// 다시 배열로 바꾸어줄 수 있다.

var myArray = ['value1', 'value2', 'value3', 'value3', 'value2'];

var mySet = new Set(myArray);

mySet.has('value1'); // true
console.log(mySet);

console.log([...mySet]); //