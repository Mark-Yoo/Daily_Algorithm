// 1. Align food from lower calorie to higher.
// 2. Have to be bilateral symmetric
// 3. There is only one zero in the middle all foods

function solution(food) {
    let answer = "";
    let reversedStr = "";
    
    for (let i = 1; i < food.length; i++) {
        const foodPerPerson = Math.floor(food[i] / 2);
        
        if (foodPerPerson > 0) {
            for (let j = 0; j < foodPerPerson; j++) {
                answer += i.toString();
            }
        }
    }
    reversedStr = answer.split("").reverse().join("");
    answer += "0";
    
    answer += reversedStr;
    
    return answer;
}