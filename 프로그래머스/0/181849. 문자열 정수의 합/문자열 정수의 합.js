function solution(num_str) {
    var answer = 0;
    [...num_str].forEach(num => answer += parseInt(num));
    return answer;
}