function solution(common) {
    const [a, b, c] = common;
    if (b - a === c - b) return common.pop() + (b - a);
    return common.pop() * (b / a);
}