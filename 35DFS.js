function solution(n) {
    let answer;

    function DFS(n) {
        if (n > 7) {
            return;
        } else {
            DFS(n * 2);
            console.log(n);
            DFS(n * 2 + 1);
        }
    }

    DFS(n);
    return answer;
}

console.log(solution(1));