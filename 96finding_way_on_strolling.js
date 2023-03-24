function solution(park, routes) {
    let startLocation = [];
    var answer = [];
    
    for (let i = 0; i < park.length; i++) {
        if (park[i].indexOf("S") > -1) {
            startLocation.push(i);
            startLocation.push(park[i].indexOf("S"));
        }
    }
    
    for (let k = 0; k < routes.length; k++) {
        const route = routes[k].split(" ");
        console.log(route);
        // if (route[0] === "E") {
            
        // }
        
        // if (route[0] === "S") {
            
        // }
        
        // if (route[0] === "W") {
            
        // }
        
        // if (route[0] === "N") {
            
        // }
    }
    
    return answer;
}