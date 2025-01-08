function solution(numLog) {
    const calculator = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a",
    }
     return numLog.slice(1).map((num, idx) => {
        return calculator[num - numLog[idx]]
    }).join('');
}