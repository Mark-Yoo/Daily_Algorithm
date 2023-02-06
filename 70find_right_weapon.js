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

// 2. make caculation occurs only half amount from the function above
function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let tempNum = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (!(i % j)) {
                if (i / j === j) {
                    tempNum += 1;
                } else {
                    tempNum += 2;
                }
            }
            
            if (tempNum > limit) {
                tempNum = power;
                break;
            }
        }
        answer += tempNum;
    }
    
    return answer;
}