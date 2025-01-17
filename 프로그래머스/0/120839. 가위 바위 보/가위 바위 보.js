function solution(rsp) {
    const cal = {
        '2': '0',
        '0': '5',
        '5': '2',
    }
    return [...rsp].map(item => cal[item]).join('');
}