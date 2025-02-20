function solution(quiz) {
    const OP = {
        '+': (a, b) => +a + +b,
        '-': (a, b) => +a - +b,
    }

    return quiz.map(q => {
        const [x, op, y, _, res] = q.split(' ');
        return OP[op](x, y) === +res ? 'O' : 'X';
    });
}
