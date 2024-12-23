function solution(n, control) {
    let answer = n;
    const calculator = {
        "w": (num) => num + 1,
        "s": (num) => num - 1,
        "d": (num) => num + 10,
        "a": (num) => num - 10,
    }
    control.split('').forEach(item => {
        answer = calculator[item](answer)
    })
    
    return answer;
}