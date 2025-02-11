function solution(numbers, k) {
    let count = 1;
    let answer = 0;
    for(let i = 0; i < k; i++) {
        answer = count;
        count += 2;
        if (count > numbers.length) count = count - numbers.length;
    }
    return answer;
}