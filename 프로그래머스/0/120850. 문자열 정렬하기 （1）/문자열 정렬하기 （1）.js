function solution(my_string) {
    return my_string.match(/\d/g).map(n => +n).sort((x, y) => x - y);
}