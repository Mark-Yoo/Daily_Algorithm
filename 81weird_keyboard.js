function solution(keymap, targets) {
    let answer = [];
    
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        let count = 0;
        
        for (let j = 0; j < target.length; j++) {
            const targetLetter = target[j];
            let tempIndex = 0;
            
            for (let k = 0; k < keymap.length; k++) {
                if (keymap[k].indexOf(targetLetter) !== -1) {
                    let temp2 = tempIndex;
                    tempIndex = keymap[k].indexOf(targetLetter) + 1;
                    if (tempIndex > temp2 && temp2 !== 0) {
                        tempIndex = temp2;
                    } else if (temp2 === 0) {
                        tempIndex = tempIndex;
                    }
                } else if (keymap[k].indexOf(targetLetter) === -1 &&
                          tempIndex === 0) {
                    tempIndex = 0;
                }
            }

            if (tempIndex === 0) {
                answer.push(-1);
                return answer;
            } else {
                count += tempIndex;
            }
        }
        answer.push(count);
    }
    
    return answer;
}