function solution(s) {
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                answer.push(i - j);
                break;
            } else if (s[i] !== s[j] && j === 0) {
                answer.push(-1);
            }
        }
        if (i === 0) {
            answer.push(-1);
        }
    }
        
    return answer;
}