function solution(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e+1).filter(n => n > k).sort((x, y) => x - y)[0] || -1);
}
