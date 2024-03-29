// function solution(numberOfPrince, exception) {
//   let answer = 0;
//   let count = 1;
//   let tempArr = Array.from({ length: numberOfPrince }, (v, i) => i + 1);

//   while (tempArr.length > 1) {
//     for (let i = 1; i <= exception; i++) {
//       if (count % exception === 0) {
//         tempArr.shift();
//       } else {
//         tempArr.push(tempArr[0]);
//         tempArr.shift();
//       }
//       count++;
//     }
//   }

//   answer = tempArr[0];
//   return answer;
// }

function solution(numberOfPrince, exception) {
  let answer = 0;
  let tempArr = Array.from({ length: numberOfPrince }, (v, i) => i + 1);

  while (tempArr.length) {
    for (let i = 1; i < exception; i++) tempArr.push(tempArr.shift());
    tempArr.shift();
    if (tempArr.length === 1) answer = tempArr.shift();
  }

  return answer;
}

console.log(solution(8, 3));
