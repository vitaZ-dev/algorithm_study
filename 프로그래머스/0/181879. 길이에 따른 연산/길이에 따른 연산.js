function solution(num) {
    return num.length > 10 ? num.reduce((a, c) => a += c, 0) : num.reduce((a, c) => a *= c, 1);
}