function solution(s) {
    return s.split(' ').reduce((a, c, i) => {
        if (c === 'Z') {
            a -= +s.split(' ')[i-1];
        } else {
            a += +c;
        }
        return a;
    }, 0);
}