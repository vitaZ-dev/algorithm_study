function solution(n, k) {
    return Array(Math.floor(n/k)).fill(1).map((num, i) => (num+i)*k);
}