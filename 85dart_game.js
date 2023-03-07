function solution(dartResult) {
    let answer = 0;
    let tempArr = [];
    let hashMap = new Map();
    let scorePow = ["S", "D", "T"];
    
    for (let i = 0; i < scorePow.length; i++) {
        hashMap.set(scorePow[i], i + 1);
    }
    
    let tempNum = 0;
    let tempResult = 0;
    for (let j = 0; j < dartResult.length; j++) {
        if (hashMap.has(dartResult[j])) {
            tempResult = Math.pow(tempNum, hashMap.get(dartResult[j]));
            tempArr.push(tempResult);
            tempNum = 0;
        } else if (dartResult[j] === "*") {
            tempArr[tempArr.length - 1] = tempArr[tempArr.length - 1] * 2;
            if (tempArr[tempArr.length - 2]) 
                tempArr[tempArr.length - 2] = tempArr[tempArr.length - 2] * 2;
        } else if (dartResult[j] === "#") {
            tempArr[tempArr.length - 1] = tempArr[tempArr.length - 1] * -1;
        } else {
            if (tempNum !== 0) {
                tempNum = parseInt((tempNum.toString()) + dartResult[j]);
            } else {
                tempResult = 0;
                tempNum = dartResult[j];
            }
        }
    }
    answer = tempArr.reduce((a, b) => a + b);
    return answer;
}