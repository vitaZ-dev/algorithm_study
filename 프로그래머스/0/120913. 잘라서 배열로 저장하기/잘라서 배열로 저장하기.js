function solution(my_str, n) {
    const answer = [];
    for(let i = 0; i < my_str.length; i += n) {
        answer.push(my_str.substring(i, i + n))
    }
    return answer;
}