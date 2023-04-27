// HOF function cause delay
function solution(X, Y) {
    let answer = "";
    let tempStr = [];
    const xArr = X.split("");
    const yArr = Y.split("");
    
    for (let i = 0; i < xArr.length; i++) {
        if(yArr.indexOf(xArr[i]) === -1) continue;
        tempStr.push(xArr[i]);
        yArr.splice(yArr.indexOf(xArr[i]), 1);
    }
    
    if (!tempStr.length) return answer = "-1";
    answer = tempStr.sort((a, b) => b - a).join("");
    
    if (answer[0] === "0") return answer = "0";
    
    return answer;
}

// Working solution for long string
function solution(X, Y) {
    let answer = "";
    let tempStr = [];
    let xArr = new Array(10).fill(0);
    let yArr = new Array(10).fill(0);
    
    X.split("").forEach(n => xArr[n] = xArr[n] + 1);
    Y.split("").forEach(n => yArr[n] = yArr[n] + 1);
    
    for (let i = 0; i < xArr.length; i++) {
        const count = Math.min(xArr[i], yArr[i]);
        
        for (let j = 0; j < count; j++) {
            tempStr.push(i);
        }
    }
    
    if (!tempStr.length) return answer = "-1";
    answer = tempStr.sort((a, b) => b - a).join("");
    if (answer[0] === "0") return answer = "0";
    
    return answer;
}