function solution(my_string) {
    const al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const answer = Array(52).fill(0);

    my_string.split("").map((n)=>{
        answer[al.indexOf(n)] += 1;
    })

    return answer;
}