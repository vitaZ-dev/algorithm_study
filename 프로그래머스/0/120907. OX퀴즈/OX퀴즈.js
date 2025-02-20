function solution(quiz) {
    const OP = {
        '+': (a, b) => +a + +b,
        '-': (a, b) => +a - +b,
    }
    const cal = (str, res) => {
        const [x, op, y] = str.split(' ');
        return OP[op](x, y) === res ? 'O' : 'X';
    }

    return quiz.map(q => {
        const [str, res] = q.split(' = ');
        return cal(str, +res);
    });
}
