function solution(lines) {
    const [[xs, xe], [ys, ye], [zs, ze]] = lines;

    const CAL = ([a, b], [c, d]) => {
        let [[x, y], [z, k]] = [[a, b], [c, d]];
        if (a > c) {
            [[x, y], [z, k]] = [[c, d], [a, b]];
        }
        // 선분1이 선분2를 포함하는 경우(x or y좌표는 겹칠 수도 있다)
        if (x >= z && y <= k) return [x, y];
        if (x <= z && y >= k) return [z, k];
        // 선분1과 선분2가 떨어져있는지 체크
        return y <= z ? [] : [z, y];
    }

    // 1. x~y 비교
    const a = CAL([xs, xe], [ys, ye]);
    const aLen = a.length ? a[1] - a[0] : 0;

    // 2. x~z 비교
    const b = CAL([xs, xe], [zs, ze]);
    const bLen = b.length ? b[1] - b[0] : 0;

    // 3. y~z 비교
    const c = CAL([ys, ye], [zs, ze]);
    const cLen = c.length ? c[1] - c[0] : 0;
    if (a.length + b.length + c.length === 6) {
        return Math.max(...a, ...b, ...c) - Math.min(...a, ...b, ...c);
    }
    return aLen + bLen + cLen;
}