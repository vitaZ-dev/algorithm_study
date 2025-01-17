function solution(numbers) {
    const arr = numbers.sort((x, y) => y - x);
    if (+(numbers.filter(n => n < 0).length % 2)) {
        return arr[0] * arr[1];
    } else {
        return Math.max(arr[0]*arr[1], arr[arr.length-1]*arr[arr.length-2]);
    }
}