function solution(nums) {
    let answer = -1;
    const arr = new Array(3001).fill(true);
    
    for (let i = 2; i * i < arr.length; i++) {
        if (!arr[i]) continue;
        for (let j = i * i; j < arr.length; j += i) {
            arr[j] = false;
        }Z
    }
    
    console.log(arr);
    return answer;
}