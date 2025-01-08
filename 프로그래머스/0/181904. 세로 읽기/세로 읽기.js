function solution(my_string, m, c) {
    var answer = '';
    [...my_string].forEach((str, idx) => {
        if ((idx+1-c) % m === 0) {
            answer += str;
        }
    })
    return answer;
}