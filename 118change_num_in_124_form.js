function solution(n) {
    let tempNum = n;
    let answerArr = [];
    
    while (tempNum > 0) {
        if (tempNum % 3 === 0) {
            answerArr.push(4);
            tempNum = Math.floor(tempNum / 3) - 1;
        } else {
            answerArr.push(tempNum % 3);
            tempNum = Math.floor(tempNum / 3);
        }
    }
    
    return answerArr.reverse().join("");
}