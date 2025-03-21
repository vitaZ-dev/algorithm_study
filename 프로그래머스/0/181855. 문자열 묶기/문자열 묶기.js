function solution(strArr) {
    let answer = {};
    strArr.forEach(item => {
        if (answer[item.length]) {
            answer[item.length] = ++answer[item.length];
        }
        else answer[item.length] = 1;
    })
    return Object.values(answer).sort((x, y) => y - x)[0];
}