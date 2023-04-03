function solution(price, money, count) {
    let answer = 0;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum += price * (i + 1);
    }
    
    if (sum - money > 0) answer = sum - money;
    else answer = 0;
    
    return answer;
}