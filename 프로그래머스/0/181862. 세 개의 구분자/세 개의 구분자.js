function solution(myStr) {
    const answer =  myStr.split(/[a | b | c]/).filter(s => s);
    return answer.length === 0 ? ["EMPTY"] : answer;
}