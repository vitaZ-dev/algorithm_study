function solution(arr, query) {
    query.forEach((item, idx) => {
        if (idx % 2 === 0) {
            arr.splice(item + 1);
        } else {
            arr.splice(0, item);
        }
    })
    return arr;
}
