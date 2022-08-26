let arr = [1, 3, 5, 6, 7, 10];

function solution(arr) {
    let answer = "No";
    let flag = 0;
    let total = arr.reduce((a, b) => a + b, 0);
    let n = arr.length;
 
    function DFS(left, sum) {
        if (flag) {
            return;
        }
        if (left === n) {
            if ((total - sum) === sum) {
                answer = "Yes";
                flag = 1;
            }
        } else {
            DFS(left + 1, sum + arr[left]);
            DFS(left + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

console.log(solution(arr));