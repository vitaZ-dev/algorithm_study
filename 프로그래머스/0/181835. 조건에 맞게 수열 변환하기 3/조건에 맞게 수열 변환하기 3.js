function solution(arr, k) {
    return k % 2 === 1 ? arr.map(a => a*k) : arr.map(a => a+k);
}