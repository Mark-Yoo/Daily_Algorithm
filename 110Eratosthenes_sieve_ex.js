// Erathosthenes sieve only
function solution(nums) {
    let answer = -1;
    const arr = new Array(3001).fill(true);
    
    for (let i = 2; i * i < arr.length; i++) {
        if (!arr[i]) continue;
        for (let j = i * i; j < arr.length; j += i) {
            arr[j] = false;
        }
    }
    
    console.log(arr);
    return answer;
}

// Working solution added
function solution(nums) {
    let answer = 0;
    const arr = new Array(3001).fill(true).fill(false, 0, 2);
    
    for (let i = 2; i * i <= arr.length; i++) {
        if (!arr[i]) continue;
        for (let j = i * i; j <= arr.length; j += i) {
            arr[j] = false;
        }
    }
    
    for (let k = 0; k < nums.length - 2; k++) {
        for (let l = 1 + k; l < nums.length - 1; l++) {
            for (let m = 1 + l; m < nums.length; m++) {
                if (arr[nums[k] + nums[l] + nums[m]]) {
                    answer += 1;
                }
            }
        }
    }
    
    return answer;
}