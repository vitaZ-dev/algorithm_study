function solution(dots) {
    let answer = 0;
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    while (true) {
        if (Math.abs((y1 - y2) / (x1 - x2)) === Math.abs((y3 - y4) / (x3 - x4))) answer++;
        if (Math.abs((y1 - y3) / (x1 - x3)) === Math.abs((y2 - y4) / (x2 - x4))) answer++;
        if (Math.abs((y1 - y4) / (x1 - x4)) === Math.abs((y2 - y3) / (x2 - x3))) answer++;
        break;
    }
    return +Boolean(answer);
}