// 2. 1 ~ 10000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
function getCount8 () {
  let num = 10000;
  let numFour = 0;
  for (let i = 0; i <= num; i++) {
    let numToStr = i + '';
    for (let j = 0; j < numToStr.length; j++) {
      numFour += numToStr[j] === '8' ? 1 : 0;
    }
  }
  return numFour;
}

console.log(getCount8()); // 4000
