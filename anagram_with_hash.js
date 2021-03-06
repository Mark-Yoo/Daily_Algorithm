// 아나그램인지 아닌지 구별하는 함수를 만드시오.

// function solution(str1, str2) {
//   let answer = true;
//   let splitStr1 = str1.split("");
//   let splitStr2 = str2.split("");
//   let hashMap1 = new Map();
//   let hashMap2 = new Map();

//   for (alphabet1 of splitStr1) {
//     if (hashMap1.has(alphabet1))
//       hashMap1.set(alphabet1, hashMap1.get(alphabet1) + 1);
//     else hashMap1.set(alphabet1, 1);
//   }

//   for (alphabet2 of splitStr2) {
//     if (hashMap2.has(alphabet2))
//       hashMap2.set(alphabet2, hashMap2.get(alphabet2) + 1);
//     else hashMap2.set(alphabet2, 1);
//   }

//   for (let [key, value] of hashMap1) {
//     if (hashMap2.get(key) !== value) answer = false;
//   }

//   return answer;
// }

function solution(str1, str2) {
  let answer = true;
  let hashMap = new Map();

  for (let x of str1) {
    if (hashMap.has(x)) hashMap.set(x, hashMap.get(x) + 1);
    else hashMap.set(x, 1);
  }
  for (let x of str2) {
    console.log(x, "before", hashMap.get(x));
    if (!hashMap.has(x) || hashMap.get(x) === 0) return false;
    hashMap.set(x, hashMap.get(x) - 1);
    console.log(x, hashMap.get(x));
  }
  return answer;
}

let str1 = "AbaAeCe";
let str2 = "baeeACA";
console.log(solution(str1, str2));
