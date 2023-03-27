function solution(x) {
    let answer = false;
    let stringifiedNum = (x + "").split("");
    const sum = stringifiedNum.reduce((a, b) => parseInt(a) + parseInt(b));
    
    if (!(x % sum)) answer = true;

    return answer;
}