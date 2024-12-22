/*
 * 어려웠던 문제 + 다른 사람의 풀이 체크해보기
 */
function solution(a, d, included) {
    var answer = 0;
    let result = 0;
    answer = included.map((tf, idx) => ({ tf, idx })).filter((item, idx) => item.tf)
    answer.forEach(num => {
        result += a + d*(num.idx)
    })
    return result;
}
// sn = a + (n-1)*d
