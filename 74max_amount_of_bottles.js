function solution(a, b, n) {
    let answer = 0;
    let accumulatedNum = 0;
    
    for (let i = 1; i <= n + accumulatedNum; i++) {
        if (!(i % a)) {
            accumulatedNum += b;
        }
    }
    
    return answer += accumulatedNum;
}