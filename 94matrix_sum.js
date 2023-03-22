function solution(arr1, arr2) {
    let answer = [];
    let tempArr = [];
    let index = 0;
    
    while (arr1.length > index) {
        for (let i = 0; i < arr1[index].length; i++) {
            tempArr.push(arr1[index][i] + arr2[index][i]);
        }
        answer.push(tempArr);
        tempArr = [];
        index += 1;
    }
    
    return answer;
}