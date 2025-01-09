function solution(my_string, indices) {
    let str = my_string.split('');
    indices.sort((x, y) => x - y).map((n, i) => {
        str.splice(n-i, 1)
    })
    return str.join('');
}