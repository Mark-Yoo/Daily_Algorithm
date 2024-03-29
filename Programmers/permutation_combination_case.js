// Permutations with recursive function
function permutations(arr, n) {
    if (n === 1) {
        return arr.map((v) => [v]);
    }
    let result = [];

    arr.forEach((fixed, idx, arr) => {
        const rest = arr.filter((_, index) => index !== idx);
        const perms = permutations(rest, n-1);
        const combine = perms.map((v) => [fixed, ...v]);
        result.push(...combine);
    });

    return result;
}

// Combination with recursive function
function combinations(arr, n) {
    if (n === 1) {
        return arr.map((v) => [v]);
    }
    const result = [];

    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx+1);
        const combis = combinations(rest, n-1);
        const combine = combis.map((v) => [fixed, ...v]);
        result.push(...combine); 
    });

    return result;
}