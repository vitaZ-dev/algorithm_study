function solution(binomial) {
    var z = binomial.split(' ');
    const cal = {
        '+': ([a, op, b]) => Number(a) + Number(b),
        '-': ([a, op, b]) => a - b,
        '*': ([a, op, b]) => a * b,
        '/': ([a, op, b]) => a / b,
    }
    return cal[z[1]](z);
}