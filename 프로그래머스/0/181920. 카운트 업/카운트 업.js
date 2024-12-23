function solution(start_num, end_num) {
    var answer = [];
    answer = Array(end_num - start_num + 1).fill().map((_, idx) => {
        return idx + start_num;
    });
    
    return answer;
}