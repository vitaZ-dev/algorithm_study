function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    const cal = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    }
    return cal[op](+a, +b);
}
