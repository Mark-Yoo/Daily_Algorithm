function solution(n, m, section) {
    let answer = 0;
    let maxWidth = 0;
    
    while (section.length) {
        if (maxWidth === 0) {
            maxWidth = section[0] + m - 1;
        }
        
        if (section[0] <= maxWidth) {
            section.shift();
            if (section[0] > maxWidth) {
                answer += 1;
                maxWidth = 0;
            }
        }
    }
    answer += 1;
    return answer;
}