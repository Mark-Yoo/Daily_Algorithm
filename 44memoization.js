// 전부 진행하는데에 이미 구한 값을 또 구하며 긴 시간이 걸림

// function solution(n, r) {
//     let answer;
//     function DFS(n, r) {
//         if (n === r || r === 0) {
//             return 1;
//         } else {
//             return DFS(n - 1, r - 1) + DFS(n - 1 , r);
//         }
//     }

//     answer = DFS(n, r);
//     return answer;
// }

// 시간을 단축하기 위해서 사용 가능한 memoization

function solution(n, r) {
    let answer;
    let dy = Array.from(Array(35), () => Array(35).fill(0));
    function DFS(n, r) {
        if (dy[n][r] > 0) {
            return dy[n][r];
        }
        if (n === r || r === 0) {
            return 1;
        } else {
            return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1 , r);
        }
    }

    answer = DFS(n, r);
    return answer;
}

console.log(solution(33, 19));