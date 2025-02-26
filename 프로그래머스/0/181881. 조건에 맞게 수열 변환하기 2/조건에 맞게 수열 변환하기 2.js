function solution(arr) {
    let array = arr;
    let answer = 0;
    while(true) {
        let prevArr = array;
        array = array.map(a => {
            if (a >= 50 && a % 2 === 0) return a / 2;
            else if (a < 50 && a % 2) return a * 2 + 1;
            return a;
        });
        answer++;
        if (JSON.stringify(prevArr) === JSON.stringify(array)) break;
    }
    return answer - 1;
}