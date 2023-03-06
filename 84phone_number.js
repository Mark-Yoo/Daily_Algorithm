function solution(numbers, hand) {
    let answer = '';
    let smartphoneNum = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]];
    let leftLocation = [3, 0];
    let rightLocation = [3, 2];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < smartphoneNum.length; j++) {
            if (smartphoneNum[j].includes(numbers[i])) {
                if (numbers[i] === 1 ||
                    numbers[i] === 4 ||
                    numbers[i] === 7) {
                    leftLocation = [j, smartphoneNum[j].indexOf(numbers[i])];
                    answer += "L";
                }
                
                if (numbers[i] === 3 || 
                    numbers[i] === 6 || 
                    numbers[i] === 9) {
                    rightLocation = [j, smartphoneNum[j].indexOf(numbers[i])];
                    answer += "R";
                }
                
                if (numbers[i] === 2 || 
                    numbers[i] === 5 || 
                    numbers[i] === 8 || 
                    numbers[i] === 0) {
                    if ((Math.abs(leftLocation[0] - j) + 
                        Math.abs(leftLocation[1] - smartphoneNum[j].indexOf(numbers[i]))) >
                       (Math.abs(rightLocation[0] - j) + 
                        Math.abs(rightLocation[1] - smartphoneNum[j].indexOf(numbers[i])))) {
                        rightLocation = [j, smartphoneNum[j].indexOf(numbers[i])];
                        answer += "R";
                    } else if ((Math.abs(leftLocation[0] - j) + 
                        Math.abs(leftLocation[1] - smartphoneNum[j].indexOf(numbers[i]))) <
                       (Math.abs(rightLocation[0] - j) + 
                        Math.abs(rightLocation[1] - smartphoneNum[j].indexOf(numbers[i])))) {
                        leftLocation = [j, smartphoneNum[j].indexOf(numbers[i])];
                        answer += "L";
                    } else {
                        if (hand === "right") {
                            rightLocation = [j, smartphoneNum[j].indexOf(numbers[i])];
                            answer += "R";
                        } else if (hand === "left") {
                            leftLocation = [j, smartphoneNum[j].indexOf(numbers[i])];
                            answer += "L";
                        }
                    }
                }
            }
        }
    }
    
    return answer;
}