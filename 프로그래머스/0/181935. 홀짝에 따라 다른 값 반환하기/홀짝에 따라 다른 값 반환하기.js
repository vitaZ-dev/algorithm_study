function solution(n) {
    if(n % 2) return (n + 1) / 2 * ((1 + n) / 2);
    else return n * (n + 1) * (n + 2) /6;
}