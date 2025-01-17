function solution(numbers) {
    return numbers.reduce((a, c) => [...a, c*2], []);
    // return numbers.map(num => num*2);
}