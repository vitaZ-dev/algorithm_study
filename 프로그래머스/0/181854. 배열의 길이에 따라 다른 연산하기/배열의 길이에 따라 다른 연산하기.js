function solution(arr, n) {
    return arr.map((a, i) => a + n * ((arr.length - i) % 2));
}