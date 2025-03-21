function solution(strArr) {
    let answer = {};
    strArr.forEach(item => {
        if (answer[item.length]) {
            answer[item.length] = ++answer[item.length];
        }
        else answer[item.length] = 1;
    })
    return Math.max(...Object.values(answer));
}