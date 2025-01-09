function solution(my_string) {
    var answer = Array(52).fill(0);
    
    [...my_string].map((str, idx) => {
        if (str.charCodeAt() > 96) {
            answer[str.charCodeAt() - 97+26] += 1;
        } else {
            answer[str.charCodeAt() - 65] += 1;
        }
    })
    
    return answer;
}