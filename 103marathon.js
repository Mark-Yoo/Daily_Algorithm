function solution(players, callings) {
    let answer = [];
    let tempRank = [...players];
    
    for (let i = 0; i < callings.length; i++) {
        let back = tempRank[tempRank.indexOf(callings[i]) - 1];
        tempRank[tempRank.indexOf(callings[i]) - 1] = callings[i];
        tempRank[tempRank.indexOf(callings[i]) + 1] = back;
    }
    
    answer = tempRank;
    return answer;
}