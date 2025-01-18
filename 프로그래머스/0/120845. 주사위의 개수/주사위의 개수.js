function solution(box, n) {
    return box.reduce((a, c) => a * Math.trunc(c / n), 1);
}