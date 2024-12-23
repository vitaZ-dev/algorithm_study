function solution(n) {
    var answer = [n];
    while(n !== 1) {
        n % 2 === 0 ? n = n*0.5 : n = 3*n+1;
        answer.push(n)
    }
    return answer;
}