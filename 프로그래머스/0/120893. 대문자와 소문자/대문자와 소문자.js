function solution(my_string) {
    return [...my_string].map(s => s.charCodeAt() >= 97 ? s.toUpperCase() : s.toLowerCase()).join('');
}