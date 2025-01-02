function solution(my_string, index_list) {
    var answer = '';
    const str = my_string.split('');
    index_list.forEach(item => {
        answer += str[item]
    })
    return answer;
}