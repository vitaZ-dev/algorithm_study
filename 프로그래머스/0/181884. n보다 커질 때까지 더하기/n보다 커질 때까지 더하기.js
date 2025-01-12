function solution(numbers, n) {
    let answer = 0;
    let check = true;
    let i = 0;
    while(check) {
        answer += numbers[i++];
        if (answer > n) check = false;
    }
    return answer;
}