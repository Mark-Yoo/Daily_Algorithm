function solution(park, routes) {
    let startLocation = [];
    let prevLocation = [];
    let currentLocation = [];
    var answer = [];
    
    for (let i = 0; i < park.length; i++) {
        if (park[i].indexOf("S") > -1) {
            startLocation.push(i);
            startLocation.push(park[i].indexOf("S"));
            currentLocation = [...startLocation];
        }
    }
    
    for (let k = 0; k < routes.length; k++) {
        const route = routes[k].split(" ");
        let count = 0;
        let isObstacle = false;
        prevLocation = [...currentLocation];
        
        while (count < route[1] && !isObstacle) {
            if (route[0] === "E") {
                currentLocation = [currentLocation[0], currentLocation[1] + 1];
            }

            if (route[0] === "S") {
                currentLocation = [currentLocation[0] + 1, currentLocation[1]];
            }

            if (route[0] === "W") {
                currentLocation = [currentLocation[0], currentLocation[1] - 1];
            }

            if (route[0] === "N") {
                currentLocation = [currentLocation[0] - 1, currentLocation[1]];
            }
            
            if (currentLocation[0] >= park.length || 
                currentLocation[1] >= park[0].length || 
                currentLocation[0] < 0 || 
                currentLocation[1] < 0 || 
                park[currentLocation[0]][currentLocation[1]] === "X") {
                currentLocation = [...prevLocation];
                break;
            }
            count += 1;
        }
    }
    
    answer = currentLocation;
    return answer;
}