function solution(wallpaper) {
    var answer = [];
    let firstX = null;
    let firstY = null;
    let lastX = null;
    let lastY = null;
    
    for (let i = 0 ; i < wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            if (firstY === null) {
                firstY = i;
            }
        
            if (firstY !== null) {
              lastY = i + 1;
            }
        }
        
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] !== '#') continue;
            
            if (firstX === null) {
                firstX = j;
            }
            
            if (firstX > j) {
                if (lastX === null) {
                    lastX = firstX + 1;
                }
                
                firstX = j;
            } else if (lastX < j) {
                lastX = j + 1;
            }
        }
        
        if (lastX === null) {
            lastX = firstX + 1;
        }
        
        if (lastY === null) {
            lastY = firstY + 1;
        }
    }
    
    answer = [firstY, firstX, lastY, lastX];
    return answer;
}