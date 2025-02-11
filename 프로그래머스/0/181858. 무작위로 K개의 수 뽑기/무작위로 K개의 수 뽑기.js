function solution(arr, k) {
    const answer = [...new Set(arr)];
    const LENGTH = answer.length;
    if (LENGTH >= k) answer.length = k;
    else {
        for(let i = 0; i < k - LENGTH; i++) {
            answer.push(-1);
        }
    }
    return answer;
}