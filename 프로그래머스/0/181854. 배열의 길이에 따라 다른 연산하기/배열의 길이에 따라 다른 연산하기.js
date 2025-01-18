function solution(arr, n) {
    return arr.map((a, i) => arr.length % 2 !== i % 2 ? a + n : a);
}