function solution(lottos, win_nums) {
    let answer = [];
    let count = 0;
    let zeroNums = 0;
    let maxNum = 0;
    let minNum = 0;
    
    for (let i = 0; i < win_nums.length; i++) {
        if (lottos.includes(win_nums[i])) count += 1;
    }
    
    for (let j = 0; j < lottos.length; j++) {
        if (lottos[j] === 0) zeroNums += 1;
    }
    
    if (7 - (count + zeroNums) >= 7 - (count)) {
        maxNum = 7 - (count + zeroNums);
        minNum = 7 - count;
    } else {
        minNum = 7 - (count + zeroNums);
        maxNum = 7 - count;
    }
    
    if ((7 - count) === 7) {
        maxNum = 6;
    }
    
    if ((7 - (count + zeroNums)) === 7) {
        minNum = 6;
    }
    
    answer = [minNum, maxNum];
    return answer;