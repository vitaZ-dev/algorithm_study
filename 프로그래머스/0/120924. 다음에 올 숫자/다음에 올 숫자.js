function solution(common) {
    const [a, b, c] = common;
    if (b - a === c - b) return common.at(-1) + (b - a);
    return common.at(-1) * (b / a);
}