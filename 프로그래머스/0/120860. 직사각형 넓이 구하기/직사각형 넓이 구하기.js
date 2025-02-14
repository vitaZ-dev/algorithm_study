function solution([[x1, y1], [x2, y2], [x3, y3], [x4, y4]]) {
    const length = (a, b, c, d) => Math.max(a, b, c, d) - Math.min(a, b, c, d);
    return length(x1, x2, x3, x4) * length(y1, y2, y3, y4);
}