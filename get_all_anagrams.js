// 주어진 문자열에서 두번째 파라미터로 주어진 문자열의 아나그램을 모두 찾는 함수를 만드시오.

// function solution(str1, str2) {
//   let answer = 0;
//   let tempSum = 0;
//   let pointer1 = 0;
//   let hashMap = new Map();

//   for (let i = 0; i < str2.length; i++) {
//     if (hashMap.has(str1[i])) hashMap.set(str1[i], hashMap.get(str1[i] + 1));
//     else hashMap.set(str1[i], 1);
//   }

//   for (x of str2) {
//     if (!hashMap.has(x) || !hashMap.get(x) === 0) break;
//     else tempSum += 1;
//   }

//   if (tempSum === str2.length) answer++;
//   tempSum = 0;

//   for (let j = str2.length; j < str1.length; j++) {
//     hashMap.set(str1[pointer1], hashMap.get(str1[pointer1]) - 1);
//     pointer1++;
//     if (hashMap.has(str1[j])) hashMap.set(str1[j], hashMap.get(str1[j]) + 1);
//     else hashMap.set(str1[j], 1);

//     for (let k = 0; k < str2.length; k++) {
//       if (hashMap.get(str2[k]) > 0) tempSum++;
//       if (tempSum === str2.length) answer++;
//     }
//     tempSum = 0;
//   }

//   return answer;
// }

// 이중 for문을 사용하지 않고 만들어보기
function compare(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(str1, str2) {
  let answer = 0;
  let hashMap1 = new Map();
  let hashMap2 = new Map();

  for (let x of str2) {
    if (hashMap1.has(x)) hashMap1.set(x, hashMap1.get(x) + 1);
    else hashMap1.set(x, 1);
  }

  let len = str2.length - 1;
  for (let i = 0; i < len; i++) {
    if (hashMap2.has(str1[i])) hashMap2.set(str1[i], hashMap2.get(str1[i]) + 1);
    else hashMap2.set(str1[i], 1);
  }
  let pointer1 = 0;
  for (let j = len; j < str1.length; j++) {
    if (hashMap2.has(str1[j])) hashMap2.set(str1[j], hashMap2.get(str1[j]) + 1);
    else hashMap2.set(str1[j], 1);
    if (compare(hashMap1, hashMap2)) answer++;
    hashMap2.set(str1[pointer1], hashMap2.get(str1[pointer1]) - 1);
    // 지우지 않으면 오류가 발생할 확률이 늘어나므로 반드시 삭제하도록 하자
    if (hashMap2.get(str1[pointer1]) === 0) hashMap2.delete(str1[pointer1]);
    pointer1++;
  }
  return answer;
}

let str1 = "bacaAacba";
console.log(solution(str1, "abc"));
