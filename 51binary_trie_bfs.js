function solution() {
    let answer = "";
    let queue = [];
    
    queue.push(1);

    while(queue.length) {
        let v = queue.shift();

        answer += v + " ";

        for (let i of [v*2, v*2+1]) {
            if (i > 7) {
                continue;
            }
            queue.push(i);
        }
    }
    return answer;
}

console.log(solution());