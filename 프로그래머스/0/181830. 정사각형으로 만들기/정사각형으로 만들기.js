function solution(arr) {
    const answer = [...arr];
    const row = arr.length;
    const column = arr[0].length;

    if (row === column) return arr;
    else if (row > column) {
        answer.map(a => a.push(...Array(row - column).fill(0)))
    }
    else if (row < column) {
        for(let i = 0; i < column - row; i++) {
            answer.push(Array(column).fill(0));
        }
    }
    return answer;
}