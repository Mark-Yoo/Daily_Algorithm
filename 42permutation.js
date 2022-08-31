let arr = [3, 6, 9, 5];

function solution(m, arr) {
    let answer = [];
    let n = arr.length;
    let ch = Array.from({ length: n }, () => 0);
    let tmp = Array.from({ length: m }, () => 0);

    function DFS(left) {
        if (left === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = 0; i < n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    tmp[left] = arr[i];
                    DFS(left + 1);
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    return answer;
}

console.log(solution(2, arr));