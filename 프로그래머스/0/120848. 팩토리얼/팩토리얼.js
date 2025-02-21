function solution(n) {
    let answer = 1;
    let cal = 1;
    while(true) {
        cal *= ++answer;
        if (cal > n) {
            answer--;
            break;
        }
    }
    return answer;
}