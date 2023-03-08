function solution(d, budget) {
    let answer = 0;
    let sortedArr = d.sort((a, b) => a - b);
    
    let tempResult = budget;
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] <= tempResult) {
            tempResult -= sortedArr[i];
            answer += 1;
        }
    }
    return answer;
}