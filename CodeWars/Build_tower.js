// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// 정삼각형 별찍기를 파라미터로 전달되는 숫자에 맞춰 층수가 늘어나게 만들어야 한다.

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
  let ithFloor = '';
    for (let j = 0; j < nFloors; j++) {
      if (i + j >= nFloors - 1) ithFloor += '*';
      else ithFloor += ' ';
    }
    for (let j = 0; j < nFloors - 1; j++) {
      if (i > j) ithFloor += '*';
      else ithFloor += ' '; 
    }
    tower.push(ithFloor);
  }
  return tower;
}

console.log(towerBuilder(1)) // ["*"]
console.log(towerBuilder(2)) // [" * ","***"]
console.log(towerBuilder(3)) // ["  *  "," *** ","*****"]