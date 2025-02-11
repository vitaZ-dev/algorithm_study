function solution(l, r) {
    const MAX = 2 ** (String(r).length) - 1;
    const answer = Array(MAX).fill(0).map((_, idx) => parseInt(idx + 1).toString(2) * 5).filter(n => n >= l && n <= r)
    
    return answer.length ? answer : [-1];
}