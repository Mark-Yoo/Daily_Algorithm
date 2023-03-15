function solution(numbers) {
    let answer = 0;
    let sorted = numbers.sort((a, b) => a - b);
    let verifyNum = 0;
    
    while (verifyNum <= 9) {
        if (sorted[0] === verifyNum) {
            sorted.shift();
        } else {
            answer += verifyNum;
        }
        verifyNum += 1;
    }
    return answer;
}