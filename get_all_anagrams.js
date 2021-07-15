// 주어진 문자열에서 두번째 파라미터로 주어진 문자열의 아나그램을 모두 찾는 함수를 만드시오.

function solution(str1, str2) {
  let answer = 0;
  let tempSum = 0;
  let pointer1 = 0;
  let hashMap = new Map();

  for (let i = 0; i < str2.length; i++) {
    if (hashMap.has(str1[i])) hashMap.set(str1[i], hashMap.get(str1[i] + 1));
    else hashMap.set(str1[i], 1);
  }

  for (x of str2) {
    if (!hashMap.has(x) || !hashMap.get(x) === 0) break;
    else tempSum += 1;
  }

  if (tempSum === str2.length) answer++;
  tempSum = 0;

  for (let j = str2.length; j < str1.length; j++) {
    hashMap.set(str1[pointer1], hashMap.get(str1[pointer1]) - 1);
    pointer1++;
    if (hashMap.has(str1[j])) hashMap.set(str1[j], hashMap.get(str1[j]) + 1);
    else hashMap.set(str1[j], 1);

    for (let k = 0; k < str2.length; k++) {
      if (hashMap.get(str2[k]) > 0) tempSum++;
      if (tempSum === str2.length) answer++;
    }
    tempSum = 0;
  }

  return answer;
}

let str1 = "bacaAacba";
console.log(solution(str1, "abc"));
