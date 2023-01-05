// Not efficient way with simple loop statement
function isPrimeNum(num) {
    for (let i = 2; i < num; i ++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i ++) {
        if (isPrimeNum(i)) {
            answer += 1;
        }
    }
    return answer;
}

// Stop calculating since square root
function isPrimeNum(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrimeNum(i)) {
            answer += 1;
        }
    }
    return answer;
}