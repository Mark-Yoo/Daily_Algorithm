function solution(num) {
    let answer = 0;
    let numResult = num;
    
    while (numResult > 1) {
        if (numResult % 2 === 0) numResult = numResult / 2;
        else if (numResult % 2 === 1) numResult = (numResult * 3) + 1;
        
        answer += 1;
        
        if (answer > 500) {
            answer = -1;
            break;
        }
    }
    
    return answer;
}