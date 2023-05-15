// 1. first try without dfs...
// Not working properly due to duplicated arrival
function findTickets(tickets, prevArrival) {
    let isTicketAvailable = false;
    let count = 1;
    let nextArrival = '';
    
    while (isTicketAvailable) {
        if (tickets[count][0] === prevArrival) {
            nextArrival = tickets[count[0]];
            console.log(nextArrival);
            isTicketAvailable = true;
        }
    }
    
    return nextArrival;
}

function solution(tickets) {
    var answer = ["ICN"];
    
    for (let i = 0; i < tickets.length; i++) {
        answer.push(findTickets(tickets, answer[answer.length - 1]));
    }
    
    return answer;
}