function solution(num, total) {
    const middle = Math.ceil(total / num);
    const gap = Math.trunc(num / 2);
    return Array(num).fill(middle - gap).map((n, idx) => n + idx);
}