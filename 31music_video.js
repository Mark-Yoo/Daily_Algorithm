let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function count(songs, capacity) {
    
}

function solution(m, songs) {
    let answer;
    let left = Math.max(...songs);
    let right = songs.reduce((a, b) => a + b, 0);

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
    }
    
    return answer;
}

console.log(solution(3, arr));