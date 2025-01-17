function solution(my_string, num1, num2) {
    const [a, b] = [my_string[num1], my_string[num2]];
    const str = [...my_string];
    str[num1] = b;
    str[num2] = a;
    return str.join('');
}