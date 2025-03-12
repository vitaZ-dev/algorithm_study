function solution(numer1, denom1, numer2, denom2) {
    let first = numer1 * denom2 + numer2 * denom1;
    let second = denom1 * denom2;
    let [d1, d2] = [Math.max(first, second), Math.min(first, second)];
    let res = 1;

    while(true) {
        let r = d1 % d2;
        d1 = d2;
        d2 = r;
        console.log('a',d1, d2, r)
        if (r === 0) {
            res = d1;
            break;
        }
    }

    return [first / res, second / res];
}