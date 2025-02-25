function solution(num_list) {
    return num_list.map(n => n.toString(2).length - 1).reduce((a, c) => a + c, 0);
}