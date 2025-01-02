function solution(my_string, queries) {
    for(let [s, e] of queries) {
        let front = my_string.slice(0, s)
        let target = my_string.slice(s,e+1).split('').reverse().join('')
        let back = my_string.slice(e+1)
        my_string = front + target + back
    }
    return my_string;
}