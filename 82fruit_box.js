function solution(k, m, score) {
    let answer = 0;
    let box = [];
    
    score.sort((a, b) => a - b);
    while (score.length !== 0) {
        box.push(score[score.length - 1]);
        score.pop();
        
        if (box.length === m) {
            answer += (Math.min(...box) * m);
            box = [];
        }
    }
    return answer;
}