function solution(ingredient) {
    let answer = 0;
    let isBun = false;
    let isVege = false;
    let isMeat = false;
    
    for (let i = 0; i < ingredient.length; i++) {
        if (isBun && isVege && ingredient[i] !== 3) {
            isBun = false;
            isVege = false;
        }
        
        if (ingredient[i] === 1) {
            isBun = true;
        } else if (isBun && ingredient[i] === 2) {
            isVege = true;
        } else if (isBun && isVege && ingredient[i] === 3) {
            isMeat = true;
        } else {
            isBun = false;
            isVege = false;
            isMeat = false;
        }
        
        if (isBun && isVege && isMeat) {
            answer += 1;
            isBun = false;
            isVege = false;
            isMeat = false;
        } 
    }
    
    return answer;
}