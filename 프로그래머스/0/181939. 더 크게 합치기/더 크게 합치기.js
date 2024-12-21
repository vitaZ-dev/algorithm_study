function solution(a, b) {
    var answer = 0;
    let first = parseInt(a + '' + b);
    let second = parseInt(b + '' + a);
    answer = first >= second ? first : second;
    return answer;
}