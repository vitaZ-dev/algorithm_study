function solution(my_string) {
    return my_string.replace(/[a-z]/g, '').split('').map(n => +n).sort((x, y) => x - y);
}