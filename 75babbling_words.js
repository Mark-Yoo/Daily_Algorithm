function solution(babbling) {
    var answer = 0;
    let wordList = ["aya", "ye", "woo", "ma"];
    let tempList = [...babbling];
    let tempWord = "";
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < wordList.length; j++) {
            if (babbling[i].includes(wordList[j])) {
                tempWord = tempList.shift();
                console.log(tempWord);
            }
        }
    }
    
    return answer;
}

// Fulfill one condition

function solution(babbling) {
    let answer = 0;
    let wordList = ["aya", "ye", "woo", "ma"];
    let tempList = [...babbling];
    let tempWord = "";
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < wordList.length; j++) {
            if (tempList[i].includes(wordList[j])) {
                tempList[i] = tempList[i].replace(wordList[j], "");
                
                if (tempList[i].length === 0) {
                    answer++;
                }
            }
        }
    }
    
    return answer;
}