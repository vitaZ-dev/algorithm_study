function solution(n) {
    return Array(n).fill().map((_, i) => {
        const returnArr = Array(n).fill(0);
        returnArr[i] = 1;
        return returnArr;
    });
}