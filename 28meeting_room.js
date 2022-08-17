let arr = [[1,4], [2, 3], [3, 5], [4, 6], [5, 7]];

function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    let endTime = 0;
    for (let i of meeting) {
        if (i[0] >= endTime) {
            answer++;
            endTime = i[1];
        }
    }

    return answer;
}

console.log(solution(arr));