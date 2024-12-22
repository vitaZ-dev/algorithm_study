function solution(num_list) {
    const [x, last] = num_list.slice(-2);
    last > x ? num_list.push(last - x) : num_list.push(last*2)
    return num_list;
}