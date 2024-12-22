/*
 * 어려웠던 문제 + 다른 사람의 풀이 체크해보기
 */
function solution(code) {
    var answer = '';
    let mode = 0;
    if (!code.split('1').length) return "EMPTY";
    code.split('').forEach((item, idx) => {
        if (item === '1') mode = +(!mode);
        else if(idx % 2 === mode) answer += item;
    })
    if (answer === "") return "EMPTY";
    return answer;
}