function solution(left, right) {
    let answer = 0;
    let tempTotal = 0;
    
    for (let i = left; i <= right; i++) {
        tempTotal = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) tempTotal += 1;
        }
        
        if (tempTotal % 2 === 0) answer += i;
        if (tempTotal % 2 !== 0) answer -= i;
    }
    
    return answer;
}