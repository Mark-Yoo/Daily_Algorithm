// 역피라미드 별찍기

function printInvertedTriangle(n) {
  let result = "";
  for (let row = 0; row < n; row += 1) {
    for (let star = 0; star < n + (n - 1); star += 1) {
      if (star < row || star >= n + (n - 1) - row) {
        result += " ";
      } else if (row % 2) {
        if (star % 2) {
          result += "*";
        } else {
          result += " ";
        }
      } else {
        if (!(star % 2)) {
          result += "*";
        } else {
          result += " ";
        }
      }
    }
    result += "\n";
  }
  return result;
}

console.log(printInvertedTriangle(10));
console.log(printInvertedTriangle(2));
