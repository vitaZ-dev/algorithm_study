function solution(order) {
    return [...order+''].filter(num => +num % 3 === 0 && +num).length;
}