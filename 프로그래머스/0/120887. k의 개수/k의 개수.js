function solution(i, j, k) {
    let answer = 0;
    for(let a = i; a <= j; a++) {
        answer += a.toString().split(k).length - 1;
    }
    return answer;
}