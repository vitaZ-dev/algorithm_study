function solution(arr, queries) {
    var answer = [];
    queries.forEach((query) => {
        let temp = [...arr].slice(query[0], query[1]+1).sort((x,y) => x - y).filter(q => q > query[2]);
        temp.length === 0 ? answer.push(-1) : answer.push(temp[0])
    });
    return answer;
}