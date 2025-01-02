function solution(my_string) {
    var answer = [];
    let str = [...my_string];
    while(str.length) {
        answer.push(str.join(''))
        str.shift()
    }
    return answer.sort();
}