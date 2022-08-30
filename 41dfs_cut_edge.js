let arr = [1, 2, 5];

function solution(m, arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = arr.length;

    function DFS(left, sum) {
        if (sum > m ) {
            return;
        }
        if (left > answer) {
            return;
        }

        if (sum === m) {
            console.log(left, sum);
            answer = Math.min(answer, left);
        } else {
            for (let i = 0; i < n; i++) {
                DFS(left + 1, sum + arr[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
}

console.log(solution(15, arr));