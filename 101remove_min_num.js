function solution(arr) {
    let answer = [...arr];
    let minNum = Math.min(...answer);
    let idx = answer.indexOf(minNum);
    
    answer.splice(idx, 1);
    
    if (!(answer.length)) answer = [-1];
    return answer;
}