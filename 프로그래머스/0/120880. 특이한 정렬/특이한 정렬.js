function solution(numlist, n) {
    return numlist.map(num => num - n)
        .sort((x,y) => (x-y))
        .sort((x,y) => Math.abs(y) - Math.abs(x))
        .reverse()
        .map(num => num + n)
}