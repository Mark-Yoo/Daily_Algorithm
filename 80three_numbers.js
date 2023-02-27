function solution(number) {
    var answer = 0;
    
    for (let i = 0; i < number.length - 2; i++) {
        const firstNum = number[i];
        for (let j = i + 1; j < number.length - 1; j++) {
            const secondNum = number[j];
            const firstResult = firstNum + secondNum;
            
            for (let k = j + 1; k < number.length; k++) {
                const thirdNum = number[k];
                const lastResult = firstResult + thirdNum;
                
                if (lastResult === 0) {
                    answer += 1;
                }
            }
        }
    }
    return answer;
}