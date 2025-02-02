function solution(array, n) {
    const x = array.filter(a => a >= n).sort((i, j) => i - j)[0];
    const y = array.filter(a => a <= n).sort((i, j) => i - j).at(-1);

    if (!Number.isInteger(x)) return y;
    else if (!Number.isInteger(y)) return x;
    return x - n >= n - y ? y : x;
}