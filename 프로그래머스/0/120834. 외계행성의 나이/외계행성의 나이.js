function solution(age) {
    return [...age+''].map(a => "abcdefghij"[a]).join('');
}