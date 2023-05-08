function solution(A,B){
    let answer = 0;
    let count = 0;
    
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    while (count < A.length) {
        answer += (A[count] * B[count]);
        count++;
    }
    
    return answer;
}