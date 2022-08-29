// for 문의 구성의 문제 - 필요시에 따라 다중 for문이 필요할 경우
// code를 변경하지 않으면 for문을 돌리는 것이 쉽지 않다.
// function solution(n, m) {
//     let answer = [];
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             for (let k = 1; k <= n; k++) {
//                 console.log(i, j);
//             }
//         }
//     }
//     return answer;
// }

// recursive를 사용하면 코드를 변경하지 않고도 여러번 자기 자신을 실행하는 반복
// 동작을 할 수 있다.
function solution(n, m) {
    let answer = [];
    let tmp = Array.from({length:m}, () => 0);
    function DFS(left) {
        if (left === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = 1; i <= n; i++) {
                tmp[left] = 1;
                DFS(left + 1);
            }
        }
    }
    DFS(0);
    return answer;

}

console.log(solution(6, 5));