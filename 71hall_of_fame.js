function solution(k, score) {
    let hallOfFame = [];
    let answer = [];
    
    for (const scoreToday of score) {
        hallOfFame.push(scoreToday);
        hallOfFame.sort((a, b) => a - b);
        
        if (hallOfFame.length > k) {
            hallOfFame.shift();
        }
        answer.push(hallOfFame[0]);
    }
    
    return answer;
}