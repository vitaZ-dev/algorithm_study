function solution(my_string) {
    return [...my_string.replace(/[^\d]/g, '')].reduce((a, c) => a + +c, 0);
}