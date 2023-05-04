function solution(n) {
    let answer = 0;
    let fiboArr = [0, 1];
    let nthNum = 0;
    
    for (let i = 2; i <= n; i++) {
        fiboArr[i] = ((fiboArr[i - 1] % 1234567) + (fiboArr[i - 2] % 1234567)) % 1234567;
    }
    
    answer = fiboArr[fiboArr.length - 1];
    return answer;
}