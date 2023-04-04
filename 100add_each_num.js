function solution(n)
{
    let answer = 0;
    
    const strNum = n.toString().split("");
    
    answer = strNum.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    
    return answer;
}