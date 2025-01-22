function solution(arr, flag) {
    let answer = [];
    arr.map((a, i) => {
        flag[i] ? answer = [...answer, ...Array(a*2).fill(a)] : answer.length -= a;
    });
    return answer;
}