function solution(name, yearning, photo) {
    let answer = [];
    const hashMap = new Map();
    
    name.forEach((n, i) => hashMap.set(n, yearning[i]));
    
    for (let i = 0; i < photo.length; i++) {
        let tempNum = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (hashMap.get(photo[i][j])) {
                tempNum += hashMap.get(photo[i][j]);
            }
        }
        answer.push(tempNum);
    }
    
    return answer;
}