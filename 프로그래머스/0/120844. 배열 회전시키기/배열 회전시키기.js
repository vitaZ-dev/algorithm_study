function solution(numbers, direction) {
    if (direction === 'right') {
        const temp = numbers[numbers.length - 1];
        numbers.pop();
        numbers.unshift(temp);
    } else {
        const temp = numbers[0];
        numbers.shift();
        numbers.push(temp);
    }
    return numbers;
}