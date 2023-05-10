function solution(s) {
    let answer = '';
    let tempArr = s.split(" ").map((n) => parseInt(n)).sort((a, b) => a - b);
    
    answer += tempArr[0] + " ";
    answer += tempArr[tempArr.length - 1];

    return answer;
}