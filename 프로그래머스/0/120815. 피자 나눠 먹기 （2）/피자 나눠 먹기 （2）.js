function solution(n) {
    let answer = 0;
    function cal(num) {
        answer++;
        return num % 6 === 0 ? answer : cal(num + n);
    }
    return cal(n) * n / 6;
}
// n과6의 최소공배수
