function solution(n, lost, reserve) {
    const tempArr = Array.from({ length : n }, () => 1);
    let answer = 0;
    
    for (let i = 0; i < lost.length; i++) {
        if (tempArr[lost[i] - 1]) {
            tempArr[lost[i] - 1] = 0;
        }
    }
    
    for (let j = 0; j < reserve.length; j++) {
        tempArr[reserve[j] - 1] += 1;
    }
    
    for (let k = 0; k < tempArr.length; k++) {
        if (tempArr[k] >= 2) {
            if (tempArr[k - 1] === 0) {
                tempArr[k]--;
                tempArr[k - 1]++;
            } else if (tempArr[k + 1] === 0) {
                tempArr[k]--;
                tempArr[k + 1]++;
            }
        }
    }
    
    tempArr.forEach(item => answer += (item >= 1 ? 1 : 0));
    
    return answer;
}