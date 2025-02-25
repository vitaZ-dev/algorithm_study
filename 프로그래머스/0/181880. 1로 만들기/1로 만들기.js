function solution(num_list) {
    let answer = 0;
    
    function condition(a) {
        let x = a;
        while(true) {
            if (x === 1) break;
            x = Math.floor(x / 2);
            answer += 1;
        }
    }
    
    num_list.forEach(num => condition(num))

    return answer;
}