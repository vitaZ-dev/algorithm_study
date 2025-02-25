function solution(a, b, c, d) {
    const set = [...new Set([a, b, c, d])];

    switch(set.length) {
        case 1:
            return 1111 * set[0];
        case 2:
            let count = [a, b, c, d].filter(item => item === a).length;
            if (count === 2) {
                return (set[0] + set[1]) * Math.abs(set[0] - set[1])
            } else {
                let p = set[0];
                let q = set[1];
                if ([a, b, c, d].filter(item => item === set[0]).length === 1) {
                    p = set[1];
                    q = set[0];
                }
                return (10 * p + q) ** 2;
            }
        case 3:
            const arr = [a, b, c, d];
            const obj = {};
            arr.forEach(num => obj[num] ? obj[num] += 1 : obj[num] = 1);
            const resArr = Object.entries(obj).filter(([_, value]) => value === 1);
            return +resArr[0][0] * +resArr[1][0];
        case 4:
            return Math.min(a, b, c, d);
    }
}