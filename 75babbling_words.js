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