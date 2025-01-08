function solution(my_string, s, e) {
    var answer = '';
    let first = my_string.slice(0, s);
    let rev = my_string.slice(s, e+1).split('').reverse().join('');
    let last = my_string.slice(e+1);
    return first + rev + last;
}