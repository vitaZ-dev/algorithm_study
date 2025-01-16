function solution(dot) {
    const [x, y] = dot;
    if (x * y > 0) return x > 0 ? 1 : 3;
    else return x < 0 ? 2 : 4;
}