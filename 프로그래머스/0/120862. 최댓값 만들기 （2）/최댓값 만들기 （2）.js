function solution(numbers) {
    const arr = numbers.sort((x, y) => x - y);
    return Math.max(arr[0] * arr[1], arr.at(-1) * arr.at(-2));
}