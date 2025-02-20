function solution(polynomial) {
    const res = polynomial.split(' + ').reduce((a, c) => {
        if (c.includes('x')) c[0] === 'x' ? a[0] += 1 : a[0] += +c.slice(0, -1);
        else a[1] += +c;
        return a;
    }, [0, 0]);
    if (res[0] === 1) res[0] = '';

    if (res[1] === 0) return `${res[0]}x`;
    else if (res[0] === 0) return `${res[1]}`
    return `${res[0]}x + ${res[1]}`;
}