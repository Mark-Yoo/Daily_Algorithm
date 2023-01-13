function solution(k, tangerine) {
    let sortedTangerine = new Map();
    let sortedAscTangerine;
    let total = 0;
    let answer = 0;
    
    
    for (const size of tangerine) {
        if (sortedTangerine.has(size)) {
            sortedTangerine.set(size, sortedTangerine.get(size) + 1);
        } else {
            sortedTangerine.set(size, 1);
        }
    }
    
    sortedAscTangerine = new Map([...sortedTangerine.entries()]
        .sort((a, b) => b[1] - a[1]));
    
    for (const [_, stock] of sortedAscTangerine) {
        if (total < k) {
            total += stock;
            answer += 1;
        } else {
            break;
        }
    }
    
    return answer;
}