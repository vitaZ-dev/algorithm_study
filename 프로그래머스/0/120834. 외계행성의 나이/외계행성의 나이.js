function solution(age) {
    return [...age+''].map(a => String.fromCharCode(+a + 97)).join('');
}