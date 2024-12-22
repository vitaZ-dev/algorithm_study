function solution(num_list) {
    let x = 1;
    let y = 0;
    num_list.forEach(num => {
        x *= num;
        y += num;
    })
    return +(x < y**2);
}