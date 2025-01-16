function solution(my_string) {
    const del = ['a', 'e', 'i', 'o', 'u'];
    return [...my_string].filter(s => !del.includes(s)).join('');
}