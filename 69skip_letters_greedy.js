function solution(s, skip, index) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
    let answer = [];
    let additionNum = 0;
    let letterIndex = 0;
    
    for (const letter of s) {
        let finalLetter = '';
        letterIndex = alphabets.indexOf(letter);
        for (let i = 1; i <= index + additionNum; i++) {
            let nextAlphabet = alphabets[++letterIndex];
            
            if (!nextAlphabet) {
                letterIndex = 0;
                nextAlphabet = 'a';
            }
            
            for (let j = 0; j < skip.length; j++) {
                if (nextAlphabet === skip[j]) {
                    additionNum++;
                }
            }
            finalLetter = nextAlphabet;
        }
        additionNum = 0;
        answer.push(finalLetter);
    }
    
    return answer.join('');
}