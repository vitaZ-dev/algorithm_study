function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        // for(let i = s; i <= e; i++) arr[i]++
        while (s <= e) arr[s++]++
    })
    return arr;
}