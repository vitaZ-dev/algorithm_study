function solution(array) {
    return array.sort((x, y) => x - y)[Math.floor(array.length / 2)];
}