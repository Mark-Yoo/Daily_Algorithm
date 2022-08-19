let exampleArr = [23, 87, 65, 12, 57, 32, 99, 81];

function solution(target, arr) {
    let answer = 0;

    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (arr[mid] === target) {
            answer = mid + 1;
            break;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    

    return answer;
}

console.log(solution(57, exampleArr));