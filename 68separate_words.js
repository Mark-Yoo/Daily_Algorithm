function solution(s) {
    let answer = 0;
    let arr = s.split('');
    let selected = '';
    let selectedNum = 0;
    let differentNum = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (!selected) {
            selected = arr[i];
            selectedNum += 1;
        } else if (selected) {
            if (selected !== arr[i]) {
                differentNum += 1;
            } else if (selected === arr[i]) {
                selectedNum += 1;
            }
        }
        
        if (selectedNum === differentNum) {
            answer += 1;
            selected = '';
            selectedNum = 0;
            differentNum = 0;
        } else if ((i === s.length - 1) && selectedNum) {
            answer += 1;
        }
        
    }
    
    return answer;
}