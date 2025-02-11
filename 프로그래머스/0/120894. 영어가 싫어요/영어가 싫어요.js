function solution(numbers) {
    const en = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return +en.reduce((a, c, i) => a = a.replaceAll(c, i) , numbers);
}