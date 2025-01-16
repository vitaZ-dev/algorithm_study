function solution(numbers) {
    const arr = numbers.sort((x, y) => y - x);
    return arr[0] * arr[1];
}