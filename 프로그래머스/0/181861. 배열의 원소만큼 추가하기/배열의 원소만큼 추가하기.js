function solution(arr) {
    var answer = [];
    arr.forEach(a => {
        answer = [...answer, ...Array(a).fill(a)]
    });
    return answer;
}