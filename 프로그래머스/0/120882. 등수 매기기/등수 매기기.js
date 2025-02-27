function solution(score) {
    const check = score.map(([a, b]) => a+b).sort((x,y) => y-x);
    return score.map(([x,y]) => check.indexOf(x+y) + 1);
}