function solution(n) {
    let answer = 0;
    
    if (n <= 1) {
        return answer = 0;
    }
    if (n % 2 === 0) {
        if (n === 2) answer += 1;
    }
    
    const count = parseInt(Math.sqrt(n));
    console.log(count);
    
    for (let i = 3; i <= count; i+=2) {
        if (n % i === 0) answer += 1;
    }
    return answer;
}


// 2. working solution for aritostenesse net algorithm
function solution(n) {
    let answer = 0;
    let tempArr = [];
    let root = Math.sqrt(n);
    
    for (let i = 0; i <= n; i++) {
        tempArr.push(true);
    }
    
    tempArr[0] = false;
    tempArr[1] = false;
    
    for (let j = 2; j < root; j++) {
        if (tempArr[j]) {
            for (let k = j * j; k <= n; k += j) {
                tempArr[k] = false;
            }
        }
    }
    
    for (let l = 0; l < tempArr.length; l++) {
        if (tempArr[l]) answer += 1;
    }
    
    return answer;
}