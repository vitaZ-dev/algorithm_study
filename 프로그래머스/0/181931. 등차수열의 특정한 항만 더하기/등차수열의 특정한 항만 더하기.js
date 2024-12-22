/*
 * 어려웠던 문제 + 다른 사람의 풀이 체크해보기
 */
function solution(a, d, included) {
    var answer = 0;
    included.forEach((num, idx) => {
        if (num) answer += (a + d*idx)
    })
    return answer;
}
