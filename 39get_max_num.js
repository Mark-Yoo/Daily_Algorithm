let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];

function solution(m, ps, pt) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = ps.length;

    function DFS(left, sum, time) {
        if (time > m) {
            return;
        }
        if (left === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(left + 1, sum + ps[left], time + pt[left]);
            DFS(left + 1, sum, time);
        }
    }

    DFS(0, 0, 0);
    return answer;
}

console.log(solution(20, ps, pt));