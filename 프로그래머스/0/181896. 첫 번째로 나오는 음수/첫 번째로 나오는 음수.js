function solution(num_list) {
    return num_list.findIndex(num => num < 0);
    // return num_list.indexOf([...num_list].filter(n => n < 0)[0]);
}