function solution(num_list) {
    const answer = [...num_list];
    let last = num_list[num_list.length - 1];
    let y = num_list[num_list.length - 2];
    last > y ? answer.push(last - y) : answer.push(last*2)
    return answer;
}