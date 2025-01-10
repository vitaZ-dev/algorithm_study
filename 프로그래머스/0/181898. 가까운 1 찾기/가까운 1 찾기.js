function solution(arr, idx) {
    const res = arr.splice(idx).indexOf(1);
    return res === -1 ? -1 : res + idx;
}