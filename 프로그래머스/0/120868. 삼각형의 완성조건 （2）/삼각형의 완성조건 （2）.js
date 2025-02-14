function solution(sides) {
    const [a, b] = sides.sort((x, y) => y - x);
    // let other = 0;

    // 1. a가 가장 길 때
    // a < other+b
    // a-b < other <= a
    // *= a - (a-b) = b

    // 2. other 가 가장 길 때
    // a < other < a+b
    // a - b < other < a
    // *= a - (a-b) - 1 = b-1
    
    return 2*b - 1;
}
