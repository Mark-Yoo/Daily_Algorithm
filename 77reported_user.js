// 1. solved the problem but not an effective way (takes too much time)
function solution(id_list, report, k) {
    let answer = [];
    let hashMap = new Map();
    let respondMap = new Map();
    
    for (const id of id_list) {
        hashMap.set(id, []);
    }
    
    for (const detail of report) {
        const reportDetail = detail.split(" ");
        
        if (!hashMap.get(reportDetail[1]).includes(reportDetail[0])) {
            hashMap.set(reportDetail[1], 
            [...hashMap.get(reportDetail[1]), reportDetail[0]]);
        }
    }
    
    for (const reportedUser of hashMap){
        if (reportedUser[1].length >= k) {
            for (let i = 0; i < reportedUser[1].length; i++) {
                if (!respondMap.get(reportedUser[1][i])) {
                    respondMap.set(reportedUser[1][i], 1);
                } else {
                    respondMap.set(reportedUser[1][i], 
                        respondMap.get(reportedUser[1][i]) + 1);
                }
            }
        }
    }
    
    for (const emailList of respondMap) {
        answer.push(emailList[1]);
    }

    if (answer.length < id_list.length) {
        for (let j = 0; j <= id_list.length - answer.length; j++) {
            answer.push(0);
        }
    }
    
    return answer.sort((a, b) => b - a);
}

// 2. effective solution which doesn't sort final answer based on it's number
function solution(id_list, report, k) {
    let answer = [];
    let hashMap = new Map();
    let respondMap = new Map();
    
    for (const detail of report) {
        const reportDetail = detail.split(" ");
        
        if (!hashMap.get(reportDetail[1])) {
            hashMap.set(reportDetail[1], [reportDetail[0]]);
        }
        else if (!hashMap.get(reportDetail[1]).includes(reportDetail[0])) {
            hashMap.set(reportDetail[1], 
                [...hashMap.get(reportDetail[1]), reportDetail[0]]);
        }
    }
    
    for (const reportedUser of hashMap){
        if (reportedUser[1].length >= k) {
            for (let i = 0; i < reportedUser[1].length; i++) {
                if (!respondMap.get(reportedUser[1][i])) {
                    respondMap.set(reportedUser[1][i], 1);
                } else {
                    respondMap.set(reportedUser[1][i], 
                        respondMap.get(reportedUser[1][i]) + 1);
                }
            }
        }
    }
    
    for (const id of id_list) {
        if (respondMap.get(id)) {
            answer.push(respondMap.get(id));
        } else {
            answer.push(0)
        }
    }
    
    return answer;
}