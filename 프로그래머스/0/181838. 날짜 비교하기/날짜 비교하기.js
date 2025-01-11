function solution([y1, m1, d1], [y2, m2, d2]) {
    const date1 = new Date(`${y1}-${m1}-${d1}`);
    const date2 = new Date(`${y2}-${m2}-${d2}`);
    return date1 < date2 ? 1 : 0;
}