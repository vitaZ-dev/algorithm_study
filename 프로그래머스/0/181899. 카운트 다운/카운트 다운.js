function solution(s, e) {
    return Array(s - e + 1).fill(s).map((n, i) => n - i);
}