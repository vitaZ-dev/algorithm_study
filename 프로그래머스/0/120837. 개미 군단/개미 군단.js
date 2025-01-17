function solution(hp) {
    let life = hp;
    var answer = 0;

    answer += Math.floor(life / 5);
    life = life % 5;

    answer += Math.floor(life / 3);
    life = life % 3;

    answer += life;
    return answer;
}