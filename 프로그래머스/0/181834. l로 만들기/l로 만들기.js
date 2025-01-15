function solution(myString) {
    return [...myString].map(s => s.charCodeAt() < 108 ? 'l' : s).join('');
}