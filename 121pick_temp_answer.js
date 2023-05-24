function solution(answers) {
    let answer = [];
    let result = [];
    let tempAnswer1 = [1, 2, 3, 4, 5];
    let tempAnswer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let tempAnswer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let countAnswer1 = 0;
    let countAnswer2 = 0;
    let countAnswer3 = 0;
    let hashMap = new Map();
    
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
    
    answer.push(countAnswer1);
    answer.push(countAnswer2);
    answer.push(countAnswer3);
    
    for (let j = 0; j < 3; j++) {
        hashMap.set(j + 1, answer[j]);
    }
    
    [...hashMap.entries()].sort((a, b) => b[1] - a[1]).map(person => result.push(person[0]));
    
    return result;
}