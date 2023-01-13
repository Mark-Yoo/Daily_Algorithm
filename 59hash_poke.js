function solution(nums) {
    const pokeDex = new Set(nums);
    const maxNumCanGet = nums.length / 2;
    let answer = 0;
    
    if (pokeDex.size >= maxNumCanGet) {
        answer = maxNumCanGet;
    } else {
        answer = pokeDex.size;
    }
    
    
    return answer;
}