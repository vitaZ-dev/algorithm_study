function solution(arr, delete_list) {
    [...arr].forEach((num, idx) => {
        if (delete_list.includes(num)) arr[idx] = -1;
    });
    return arr.filter(n => n !== -1);
}