function solution(arr, k) {
    const answer = [...new Set(arr)].slice(0, k);
    if (answer.length !== k) {
        return [...answer, ...Array(k - answer.length).fill(-1)];
    }
    return answer;
}