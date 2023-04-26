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