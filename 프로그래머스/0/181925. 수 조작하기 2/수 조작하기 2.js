function solution(numLog) {
    var answer = '';
    const calculator = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a",
    }
    
    Array(numLog.length-1).fill('').forEach((_, idx) => {
        answer += calculator[(numLog[idx+1] - numLog[idx]) + '']
    })
    
    return answer;
}