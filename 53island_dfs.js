const arr = [[1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 1], [1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0, 0]];

function solution(board) {
    let answer = 0;
    let n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];

    function DFS(x, y) {
        board[x][y] = 0;
        for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = x + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                DFS(nx, ny);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                answer++;
                DFS(i, j);
            }
        }
    }

    return answer;
}

console.log(solution(arr));