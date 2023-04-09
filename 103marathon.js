// function solution(players, callings) {
//     let answer = [];
//     let tempRank = [...players];
    
//     for (let i = 0; i < callings.length; i++) {
//         let back = tempRank[tempRank.indexOf(callings[i]) - 1];
//         tempRank[tempRank.indexOf(callings[i]) - 1] = callings[i];
//         tempRank[tempRank.indexOf(callings[i]) + 1] = back;
//     }
    
//     answer = tempRank;
//     return answer;
// }

// 2. Solution using hashMap to reduce iteration delay
// * May need to be refactored
function solution(players, callings) {
    let answer = [];
    let nameFromRank = new Map();
    let rankFromName = new Map();
    
    players.forEach((player, idx) => {
        nameFromRank.set(players[idx], idx + 1);
        rankFromName.set(idx + 1, players[idx]);
    });
    
    for (let i = 0; i < callings.length; i++) {
        const rankFront = nameFromRank.get(callings[i]) - 1;
        const rankBack = rankFront + 1;
        const playerFront = callings[i];
        const playerBack = rankFromName.get(nameFromRank.get(callings[i]) - 1);
        
        rankFromName.set(rankFront, playerFront);
        rankFromName.set(rankBack, playerBack);
        
        nameFromRank.set(playerFront, rankFront);
        nameFromRank.set(playerBack, rankBack);
    }
    
    [...rankFromName.entries()].forEach((rank) => answer.push(rank[1]));
    return answer;
}