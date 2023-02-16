function solution(survey, choices) {
    let answer = '';
    let personalityTypes = [
        {R: 0, T: 0}, 
        {C: 0, F: 0}, 
        {J: 0, M: 0}, 
        {A: 0, N: 0}
    ];

    for (let i = 0; i < survey.length; i++) {
        let resultType;
        let resultNum = 0;
        
        if (choices[i] > 4) {
            resultType = survey[i][1];
            resultNum = choices[i] - 4;
        }
        if (choices[i] < 4) {
            resultType = survey[i][0];
            resultNum = 4 - choices[i];
        }
        
        for (const pType of personalityTypes) {
            if (pType[resultType] >= 0) {
                pType[resultType] = pType[resultType] + resultNum;
            }
        }
    }
    for (let pType of personalityTypes) {
        const keys = Object.keys(pType);

        if (pType[keys[0]] >= pType[keys[1]]) {
            answer += keys[0];
        } else {
            answer += keys[1];
        }
    }
    return answer;
}