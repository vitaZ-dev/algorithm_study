function solution(array) {
    let answer = 0;
    array.forEach(a => {
        answer += a.toString().split('7').length - 1
    })
    return answer;
}