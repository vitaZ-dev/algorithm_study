function solution(s) {
    const stack = [];
    
    s.split(' ').forEach(item => {
        if (item === 'Z') stack.pop();
        else stack.push(+item)
    });
    
    return stack.length ? stack.reduce((a, c) => a + c, 0) : 0;
    /*
    return s.split(' ').reduce((a, c, i) => {
        if (c === 'Z') {
            a -= +s.split(' ')[i-1];
        } else {
            a += +c;
        }
        return a;
    }, 0);
    */
}