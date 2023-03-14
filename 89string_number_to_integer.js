function solution(s) {
    let answer = 0;
    let hashMap = new Map();
    let tempAnswer = s;
    let numTemplate = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];
    
    for (let i = 0; i < numTemplate.length; i++) {
        hashMap.set(numTemplate[i], i);
    }
    
    for (let j = 0; j < numTemplate.length; j++) {
        while (tempAnswer.includes(numTemplate[j])) {
            tempAnswer = tempAnswer.replace(numTemplate[j], hashMap.get(numTemplate[j]));
        }
    }
    
    answer = parseInt(tempAnswer);
    return answer;
}