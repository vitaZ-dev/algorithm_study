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