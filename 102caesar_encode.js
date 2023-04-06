function solution(s, n) {
    let answer = '';
    const alphabet = ["a", "b", "c", "d",
                      "e", "f", "g", "h",
                      "i", "j", "k", "l", 
                      "m", "n", "o", "p",
                      "q", "r", "s", "t",
                      "u", "v", "w", "x", 
                      "y", "z"];
    
    if (!(s.trim().length)) return answer = s;
    for (let i = 0; i < s.length; i++) {
        if (!(s[i].trim().length)) {
            answer += " ";
            continue;
        }
        
        if (s[i].toUpperCase() === s[i]) {
            answer += alphabet[alphabet.indexOf(s[i].toLowerCase()) + n > 25 ? 
                               alphabet.indexOf(s[i].toLowerCase()) + n - 26 : 
                               alphabet.indexOf(s[i].toLowerCase()) + n].toUpperCase();
        }
        
        if (s[i].toLowerCase() === s[i]) {
            answer += alphabet[alphabet.indexOf(s[i]) + n > 25 ? 
                               alphabet.indexOf(s[i]) + n - 26 : 
                               alphabet.indexOf(s[i]) + n];
        }
    }
    
    return answer;
}