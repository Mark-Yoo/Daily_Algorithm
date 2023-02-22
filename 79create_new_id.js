// 1. kakao recruitment 2021 - create new id

function solution(new_id) {
    let answer = '';
    let reg = /[a-z._-]/g;
    let regPeroid = /\*./;
    let tempId = new_id;
    
    tempId = tempId.toLowerCase();
    
    console.log(tempId.match(reg));
    
    for (let i = 0; i < tempId.length; i++) {
    }
    
    console.log(tempId);
    return answer;
}