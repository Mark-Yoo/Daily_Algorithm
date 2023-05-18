function solution(a, b) {
    var answer = '';
    let days = ["SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    let dayIndex = new Date(`2016-${a}-${b}`).getDay();
    
    answer = days[dayIndex];
    return answer;
}