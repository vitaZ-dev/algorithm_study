function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.filter(int => {
        let num = parseInt(int.substr(s, l), 10);
        if (num > k) answer.push(num)
    })
    return answer;
}