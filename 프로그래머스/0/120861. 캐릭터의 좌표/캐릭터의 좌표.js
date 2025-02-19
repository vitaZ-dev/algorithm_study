function solution(keyinput, board) {
    const [width, height] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

    return keyinput.reduce((a, c, i) => {
        if (c === 'left') a[0] <= -width ? a[0] = -width : a[0] -= 1;
        if (c === 'right') a[0] >= +width ? a[0] = +width : a[0] += 1;
        if (c === 'down') a[1] <= -height ? a[1] = -height : a[1] -= 1;
        if (c === 'up') a[1] >= +height ? a[1] = +height : a[1] += 1;
        return a;
    }, [0, 0]);
}