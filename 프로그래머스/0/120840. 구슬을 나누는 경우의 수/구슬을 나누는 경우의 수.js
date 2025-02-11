function solution(balls, share) {
    let n = 1;
    let m = 1;
    if (balls !== share) {
        for(let i = balls; i > share; i--) {
            n *= i
        }
        for(let j = balls - share; j > 1; j--) {
            m *= j
        }
    }
    return Math.floor(n / m);
}