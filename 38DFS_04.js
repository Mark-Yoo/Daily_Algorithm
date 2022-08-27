let arr = [81, 58, 42, 33, 61];

function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;

    function DFS(left, sum) {
        if (sum > c) return;
        if (left === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(left + 1, sum + arr[left]);
            DFS(left + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

console.log(solution(259, arr));