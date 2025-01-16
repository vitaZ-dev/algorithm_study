function solution(numbers) {
    const [a, b] = numbers.sort((x, y) => y - x);
    return a * b;
}