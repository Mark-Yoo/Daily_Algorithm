function solution(times) {
    let answer = Number.MIN_SAFE_INTEGER;
    let tempArr = [];

    for (let i of times) {
        tempArr.push([i[0], 's']);
        tempArr.push([i[1], 'e']);
    }

    tempArr.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1].charCodeAt() - b[1].charCodeAt();
        } else {
            return a[0] - b[0];
        }
    })

    let count = 0;

    for (let i of tempArr) {
        if (i[1] === 's') {
            count++;
        } else {
            count--;
        }
        answer = Math.max(answer, count);
    }

    return answer;
}

let arr = [[12, 15], [14, 20], [15, 18], [10, 30], [13, 31]];
console.log(solution(arr));