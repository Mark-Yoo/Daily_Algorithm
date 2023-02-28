function solution(keymap, targets) {
    let answer = [];
    
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        let count = 0;
        
        for (let j = 0; j < target.length; j++) {
            const targetLetter = target[j];
            let tempIndex = 0;
            
            for (let k = 0; k < keymap.length; k++) {
                tempIndex = keymap[k].indexOf(targetLetter) + 1;
                if (keymap[k].indexOf(targetLetter) === -1) {
                    tempIndex = -1;
                }
            }
            
            if (tempIndex === -1) {
                answer.push(-1);
                break;
            } else {
                count += tempIndex;
            }
        }
        answer.push(count);
    }
    
    return answer;
}