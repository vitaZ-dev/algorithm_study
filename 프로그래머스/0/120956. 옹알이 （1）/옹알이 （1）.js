function solution(babbling) {
    const pa = ["aya", "ye", "woo", "ma"];
    return babbling.map(item => {
        let res = item;
        pa.forEach(p => res = res.replace(p, '!'));
        return res;
    }).filter(a => a.replaceAll('!', '') === '').length;
}