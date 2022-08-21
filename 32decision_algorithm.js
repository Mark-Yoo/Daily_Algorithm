let arr = [5, 6, 8, 12, 14];

function count(stable, dist) {
    let countNum = 1;
    let ep = stable[0];

    for (let i = 1; i < stable.length; i++) {
        if (stable[i] - ep >= dist) {
            countNum++;
            ep = stable[i];
        }
    }
    return countNum;
}

function solution(c, stable) {
    let answer;

    stable.sort((a, b) => a - b);

    let left = 1;
    let right = stable[stable.length - 1];

    while (left <= right) {
        let mid = parseInt((left + right) / 2);

        if (count(stable, mid) >= c) {
            answer = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return answer;
}

console.log(solution(3, arr));