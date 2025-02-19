function solution(arr) {
    if(arr.length === 1 || arr.length === 2) return arr;

    // const sqrtLength = Math.sqrt(arr.length);
    const logLength = Math.log2(arr.length);
    if(Number.isInteger(logLength)) return arr;

    const cal = Math.ceil(logLength);
    const length = Math.pow(2, cal) - arr.length;

    // const cat = Array(length).fill(0);
    for(let i = 0; i < length; i++) {
        arr.push(0);
    }
    return arr;
}