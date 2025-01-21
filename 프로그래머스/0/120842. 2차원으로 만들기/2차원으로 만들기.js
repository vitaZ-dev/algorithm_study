function solution(num_list, n) {
    const answer = [];
    for(let i = 0; i < num_list.length / n; i++) {
        const arr = [];
        for(let k = 0; k < n; k++) arr.push(num_list[i*n + k])
        answer.push(arr);
    }
    return answer;
}