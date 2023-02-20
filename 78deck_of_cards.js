function solution(cards1, cards2, goal) {
    let answer = '';
    let isNotAbleToDelete = false;
    let indexArr = [];
    
    while (goal.length > 0 && !isNotAbleToDelete) {
        if (cards1[0] === goal[0]) {
            cards1.shift();
            goal.shift();
        } else if (cards2[0] === goal[0]) {
            cards2.shift();
            goal.shift();
        }
        
        if (cards1[0] !== goal[0] && cards2[0] !== goal[0]) {
            isNotAbleToDelete = true;
            answer = "No";
        }
    }
    
    if (!(goal.length)) {
        answer = "Yes";
    }
    
    return answer;
}