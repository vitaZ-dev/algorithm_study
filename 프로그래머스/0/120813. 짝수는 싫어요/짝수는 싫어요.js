function solution(n) {
    var answer = [];
    for (let i = 1; i <= n; i += 2) answer.push(i)
    return answer;
    // return Array(Math.ceil(n / 2)).fill(1).map((num, idx) => num + 2 * idx);
    // return Array(Math.ceil(n / 2)).fill(1).reduce((a, c, i) => [...a, c + 2*i], []);
}