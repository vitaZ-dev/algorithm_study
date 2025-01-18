function solution(box, n) {
    var answer = 0;
    return box.reduce((a, c) => a * Math.floor(c / n), 1);
}