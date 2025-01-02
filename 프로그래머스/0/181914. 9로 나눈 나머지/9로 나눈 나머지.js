function solution(number) {
    let answer = 0;
    number.split('').forEach((num) => {
        answer += num*1
    })
    return answer % 9;
}