function solution(my_string, overwrite_string, s) {
    const start_str = my_string.slice(0, s);
    const end_str = my_string.slice(overwrite_string.length+s)
    return start_str + overwrite_string + end_str;
}