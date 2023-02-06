// 1. Not an efficient way but can solve the problem
function solution(number, limit, power) {
    let answer = 0;
    let tempNum = 0;
    
    for (let i = 1; i <= number; i++) {
        tempNum = 0;
        for (let j = 1; j <= i; j++) {
            if (tempNum >= limit) {
                tempNum = power;
                break;
            } else if (!(i % j)) {
                tempNum += 1;
            }
        }
        answer += tempNum;
    }
    
    return answer;
}