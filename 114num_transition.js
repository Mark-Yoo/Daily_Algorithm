function recursive(x, y, n) {
    let newX = x;
    
    if (y % x !== 0) {
        newX += n;
        
        if (newX < y) {
            recursive(x, y, n);
        }
    } else {
        return newX;
    }
    
    return newX;
}

function solution(x, y, n) {
    let answer = 0;
    let xNum = x;
    
    console.log(recursive(x, y, n));
    
    return answer;
}