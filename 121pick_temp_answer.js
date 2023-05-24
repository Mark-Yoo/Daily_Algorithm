function solution(answers) {
    let answer = [];
    let tempAnswer1 = [1, 2, 3, 4, 5];
    let tempAnswer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let tempAnswer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let countAnswer1 = 0;
    let countAnswer2 = 0;
    let countAnswer3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === tempAnswer1[i % tempAnswer1.length]) {
            countAnswer1 += 1;
        }
        
        if (answers[i] === tempAnswer2[i % tempAnswer2.length]) {
            countAnswer2 += 1;
        }
        
        if (answers[i] === tempAnswer3[i % tempAnswer3.length]) {
            countAnswer3 += 1;
        }
    }
    
    console.log(countAnswer1);
    console.log(countAnswer2);
    console.log(countAnswer3);
    return answer;
}