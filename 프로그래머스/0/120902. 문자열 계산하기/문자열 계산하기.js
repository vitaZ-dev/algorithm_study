function solution(my_string) 
{
    // 연산자가 하나만 있다는 보장이 없음!
    let op = '+';
    // let answer = 0;
    // my_string.split(' ').forEach(s => {
    //     if (Number.isInteger(+s)) {
    //         op === '+' ? answer += +s : answer -= +s;
    //     }
    //     else op = s;
    // })
    
    return my_string.split(' ').reduce((a, c) => {
        if (Number.isInteger(+c)) {
            op === '+' ? a += +c : a -= +c;
        }
        else op = c;
    
        return a;
    }, 0);
}