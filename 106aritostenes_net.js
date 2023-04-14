function solution(n) {
    let answer = 0;
    
    if (n <= 1) {
        return answer = 0;
    }
    if (n % 2 === 0) {
        if (n === 2) answer += 1;
    }
    
    const count = parseInt(Math.sqrt(n));
    console.log(count);
    
    for (let i = 3; i <= count; i+=2) {
        if (n % i === 0) answer += 1;
    }
    return answer;
}