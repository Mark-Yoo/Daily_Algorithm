// function solution(ingredient) {
//     let answer = 0;
//     let isBun = false;
//     let isVege = false;
//     let isMeat = false;
    
//     for (let i = 0; i < ingredient.length; i++) {
//         if (isBun && isVege && ingredient[i] !== 3) {
//             isBun = false;
//             isVege = false;
//         }
        
//         if (ingredient[i] === 1) {
//             isBun = true;
//         } else if (isBun && ingredient[i] === 2) {
//             isVege = true;
//         } else if (isBun && isVege && ingredient[i] === 3) {
//             isMeat = true;
//         } else {
//             isBun = false;
//             isVege = false;
//             isMeat = false;
//         }
        
//         if (isBun && isVege && isMeat) {
//             answer += 1;
//             isBun = false;
//             isVege = false;
//             isMeat = false;
//         } 
//     }
    
//     return answer;
// }


// 2. hamburger solution with simple array splice
function solution(ingredient) {
    let answer = 0;
    let count = 0;

    while (count < ingredient.length) {
        if (count < 0) count = 0;
        if (ingredient[count] === 1) {
            if (ingredient[count + 1] === 2) {
                if (ingredient[count + 2] === 3) {
                    if (ingredient[count + 3] === 1) {
                        answer += 1;
                        ingredient.splice(count, 4);
                        count -= 3;
                    }
                }
            }
        }
        count += 1;
    }
    
    return answer;
}