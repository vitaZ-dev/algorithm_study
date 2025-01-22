function solution(my_string) {
    return my_string.split(/\D+/).reduce((a, c) => a + +c , 0);
}