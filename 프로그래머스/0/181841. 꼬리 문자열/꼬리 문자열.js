function solution(str_list, ex) {
    return str_list.filter(str => !str.includes(ex)).join('');
    /*
    return str_list.reduce((a, c) => {
        if (c.includes(ex)) return a;
        return a + c
    }, "");
    */
    /*
    var answer = '';
    str_list.forEach(str => {
        if (!str.includes(ex)) {
            answer += str;
        }
    })
    return answer;
    */
}