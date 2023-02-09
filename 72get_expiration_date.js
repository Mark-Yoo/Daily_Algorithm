function getExpirationDate({ year, month, date, limit }) {
    let newYear = year;
    let newMonth = month;
    let newLimit = parseInt(limit);
    
    newMonth = month + newLimit;
    
    if (month + newLimit > 12) {
        newYear += 1;
        newMonth = month + newLimit - 12;
    }
    
    return {year: newYear, month: newMonth, date: date};
}

function solution(today, terms, privacies) {
    let answer = [];
    let todayInSeparate = today.split('.').map(_ => parseInt(_));
    let hashMap = new Map();

    for (let i = 0; i < terms.length; i++) {
        const termsSep = terms[i].split(' ');
        hashMap.set(termsSep[0], termsSep[1]);
    }
    
    for (let j = 0; j < privacies.length; j++) {
        let privacy = privacies[j].split(' ');
        let dateInSeparate = privacy[0].split('.').map(_ => parseInt(_));
        
        let {year, month, date} = getExpirationDate({
            year: dateInSeparate[0],
            month: dateInSeparate[1],
            date: dateInSeparate[2],
            limit: hashMap.get(privacy[1])
        });
        
        if (todayInSeparate[0] > year) {
            answer.push(j + 1);
        } else if (todayInSeparate[1] > month) {
            answer.push(j + 1);
        } else if (todayInSeparate[0] === year &&
                   todayInSeparate[1] === month &&
                   todayInSeparate[2] >= date) {
            answer.push(j + 1);
        }
    }
    
    return answer;
}


// Solution
// It can now check if 12months is added to December (edge case)
function getExpirationDate({ year, month, date, limit }) {
    let newYear = year;
    let newMonth = month;
    let newLimit = parseInt(limit);
    
    newMonth = month + newLimit;
    
    if (month + newLimit > 12) {
        if (((month + newLimit) % 12) !== 0) {
            newYear += Math.floor((month + newLimit) / 12);
            newMonth = (month + newLimit) % 12;
        } else {
            newYear += Math.floor((month + newLimit) / 12) - 1;
            newMonth = 12;
        }
    }
    
    return {year: newYear, month: newMonth, date: date};
}

function solution(today, terms, privacies) {
    let answer = [];
    let todayInSeparate = today.split('.').map(_ => parseInt(_));
    let hashMap = new Map();

    for (let i = 0; i < terms.length; i++) {
        const termsSep = terms[i].split(' ');
        hashMap.set(termsSep[0], termsSep[1]);
    }
    
    for (let j = 0; j < privacies.length; j++) {
        let privacy = privacies[j].split(' ');
        let dateInSeparate = privacy[0].split('.').map(_ => parseInt(_));
        
        let {year, month, date} = getExpirationDate({
            year: dateInSeparate[0],
            month: dateInSeparate[1],
            date: dateInSeparate[2],
            limit: hashMap.get(privacy[1])
        });
        
        if (todayInSeparate[0] > year) {
            answer.push(j + 1);
        } else if (todayInSeparate[0] === year &&
                   todayInSeparate[1] > month) {
            answer.push(j + 1);
        } else if (todayInSeparate[0] === year &&
                   todayInSeparate[1] === month &&
                   todayInSeparate[2] >= date) {
            answer.push(j + 1);
        }
    }
    
    return answer;
}