function solution(array) {
    const obj = {}
    array.forEach(a => {
        if (obj?.[a]) obj[a] = obj[a] + 1;
        else obj[a] = 1;
    });

    let max = -1;
    let maxKey = -1;
    for(const [key, value] of Object.entries(obj)) {
        if (max < value) {
            max = value;
            maxKey = [key];
        } else if (max === value) {
            maxKey.push(key)
        }
    }
    console.log(max, maxKey)
    return maxKey.length > 1 ? -1 : +maxKey[0];
}
