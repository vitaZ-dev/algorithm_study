function solution(n) {
    if (n === 1) return 0;
    return Array(Math.floor(n / 2)).fill().map((_, i) => 2*(i+1)).reduce((a, c) => a + c);
}