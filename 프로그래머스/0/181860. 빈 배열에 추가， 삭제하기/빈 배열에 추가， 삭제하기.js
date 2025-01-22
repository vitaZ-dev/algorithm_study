function solution(arr, flag) {
    return arr.reduce(
        (a, c, i) => flag[i] ? a = [...a, ...Array(c*2).fill(c)] : a.slice(0, -c)
        , []
    );
}