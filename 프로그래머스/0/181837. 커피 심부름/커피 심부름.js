function solution(order) {
    var answer = 0;
    order.forEach(od => {
        if (od.includes('cafelatte')) answer += 5000;
        else answer += 4500;
    })
    return answer;
}