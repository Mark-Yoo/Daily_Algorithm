function solution(array, commands) {
    let answer = [];
    
    for (const command of commands) {
        let tempResult = array.slice(command[0] - 1, command[1]);
        
        tempResult.sort((a, b) => a - b);
        answer.push(tempResult[command[2] - 1]);
    }
    return answer;
}