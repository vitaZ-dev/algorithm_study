function solution(picture, k) {
    var answer = [];
    picture.forEach(p => {
        for(let i = 0; i < k; i++) {
            answer.push(p.split('').map(str => str.repeat(k)).join(''))
        }
    });
    return answer;
}