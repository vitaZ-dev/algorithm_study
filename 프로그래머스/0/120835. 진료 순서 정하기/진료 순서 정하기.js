function solution(emergency) {
    const sort = [...emergency].sort((x, y) => y - x);
    return emergency.map(item => sort.indexOf(item) + 1);
}