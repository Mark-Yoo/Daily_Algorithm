function solution(sizes) {
    let answer = 0;
    let horizontal = 0;
    let vertical = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => b - a);
        
        if (horizontal < sizes[i][0]) {
            horizontal = sizes[i][0];
        }
        
        if (vertical < sizes[i][1]) {
            vertical = sizes[i][1];
        }
    }
    answer = horizontal * vertical;
    return answer;
}