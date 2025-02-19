function solution(rank, attendance) {
    const [x, y, z] = rank.filter((_, idx) => attendance[idx]).sort((i,j) => i-j);
    const a = rank.indexOf(x);
    const b = rank.indexOf(y);
    const c = rank.indexOf(z);
    return 10000 * a + 100 * b + c;
}