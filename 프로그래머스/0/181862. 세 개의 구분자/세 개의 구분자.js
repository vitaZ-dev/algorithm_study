function solution(myStr) {
    const answer =  myStr.replace(/[a-c]/g, ' ').split(' ').filter(s => s);
    return answer.length === 0 ? ["EMPTY"] : answer;
}