function solution(my_string) {
    const arr = my_string.replaceAll(/[a-zA-Z]/g, ' ').split(' ').filter(s => s);
    return arr.reduce((a, c) => a + +c , 0);
}