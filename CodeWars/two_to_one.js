// Two to One

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

// a부터 z까지의 문자들의 조합으로 이루어진 문자열이 2개 함수에 전달된다. 2개의 문자열을 합쳐 중복되지 않는 글자들로 오름차순 정렬하는 알고리즘을 만들어라.

function longest(s1, s2) {
  // 두 문자열을 합쳐 배열로 만든다.
  const arraySum = [...(s1 + s2)];
  // 합쳐진 문자열을 reduce를 사용해 중복된는 문자들을 제거하고 unique한 숫자들만 하나씩 남긴다.
  const arrSum = arraySum.reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
  }, []);
  // 이후 남은 문자열들을 정렬한 후 다시 배열을 join을 이용해 문자열로 합친다.
  const sortedNum = arrSum.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
  return sortedNum.join('');
}

console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")) // "acefghilmnoprstuy"