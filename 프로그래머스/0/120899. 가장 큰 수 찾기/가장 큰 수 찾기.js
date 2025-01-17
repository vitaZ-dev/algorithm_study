function solution(array) {
    const maxNum = [...array].sort((x, y) => y - x)[0];
    return [maxNum, array.indexOf(maxNum)];
}