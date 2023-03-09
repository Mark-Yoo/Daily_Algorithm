function solution(n, arr1, arr2) {
    let answer = [];
    let arr1Binary = [];
    let arr2Binary = [];
    
    for (let i = 0; i < arr1.length; i++) {
        arr1Binary.push(parseInt(arr1[i].toString(2)).toString());
        arr2Binary.push(parseInt(arr2[i].toString(2)).toString());
    }
    
    for (let j = 0; j < arr1Binary.length; j++) {
        if (arr1Binary[j].length < n) {
            let tempZeroContainer = "";
            
            for (let k = 0; k < n - arr1Binary[j].length; k++) {
                tempZeroContainer += "0";
            }
            
            arr1Binary[j] = tempZeroContainer + arr1Binary[j];
            tempZeroContainer = "";
        }
        
        if (arr2Binary[j].length < n) {
            let tempZeroContainer = "";
            
            for (let k = 0; k < n - arr2Binary[j].length; k++) {
                tempZeroContainer += "0";
            }
            
            arr2Binary[j] = tempZeroContainer + arr2Binary[j];
            tempZeroContainer = "";
        }
    }
    
    for (let i = 0; i < arr1Binary.length; i++) {
        let encodedLine = "";
        for (let j = 0; j < arr1Binary[i].length; j++) {
            if (parseInt(arr1Binary[i][j]) + parseInt(arr2Binary[i][j])) {
                encodedLine += "#"
            } else {
                encodedLine += " ";
            }
        }
        answer.push(encodedLine);
    }
    return answer;
}