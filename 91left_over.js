function solution(n) {
    let answer = 0;
    let rightHand = 1;
    
    while (n % rightHand !== 1) {
        rightHand += 1;
    }
    
    answer = rightHand;
    return answer;
}