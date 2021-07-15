// A, B, C, D, E 중 하나를 선택해야 하는 경우, 사람들이 선택한 알파벳 중 가장 많이 선택된 알파벳을 출력하는 함수를 만드시오. (무조건 하나의 알파벳만이 선택되는 결과가 나오도록 조건이 주어진다.)

function solution(arr) {
  let answer = "";
  let maxNum = Number.MIN_SAFE_INTEGER;
  let mapOfAlphabet = new Map();

  for (alphabet of arr) {
    if (!mapOfAlphabet.get(alphabet)) {
      mapOfAlphabet.set(alphabet, 1);
    } else {
      let tempNum = mapOfAlphabet.get(alphabet);
      mapOfAlphabet.set(alphabet, ++tempNum);
    }
  }

  for (let [key, value] of mapOfAlphabet) {
    if (maxNum < value) {
      maxNum = value;
      answer = key;
    }
  }
  return answer;
}

let arr = [
  "B",
  "A",
  "C",
  "B",
  "A",
  "C",
  "C",
  "A",
  "C",
  "C",
  "B",
  "D",
  "E",
  "D",
  "E",
];
console.log(solution(arr));
