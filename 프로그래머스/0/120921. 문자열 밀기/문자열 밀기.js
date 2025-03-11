function solution(A, B) {
    if (A === B) return 0;

    let cnt = 1;
    let i = 1;
    while (i <= A.length) {
        let check = A.slice(A.length - i) + A.slice(0, A.length - i);
        if (check !== B) {
            cnt++;
            i++;
        }
        else break;
    }
    return cnt > A.length ? -1 : cnt;
}