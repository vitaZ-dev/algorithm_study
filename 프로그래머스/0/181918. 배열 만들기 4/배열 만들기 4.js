function solution(arr) {
    var stk = [arr[0], arr[1]];
    let i = 2;
    while(i < arr.length) {
        if (stk[stk.length - 1] >= arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i++]);
        }
    }
    return stk;
}