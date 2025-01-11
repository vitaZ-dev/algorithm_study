function solution(num_list) {
    const odd = [...num_list].filter((_, i) => i % 2 === 0).reduce((a, c) => a += c);
    const even = [...num_list].filter((_, i) => i % 2 === 1).reduce((a, c) => a += c);
    return Math.max(odd, even);
}