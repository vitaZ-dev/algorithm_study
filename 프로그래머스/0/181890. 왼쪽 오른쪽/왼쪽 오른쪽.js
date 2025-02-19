function solution(str_list) {
    if (str_list.includes('l') || str_list.includes('r')) {
        const left = str_list.indexOf('l');
        const right = str_list.indexOf('r');
        
        if (left === -1) return str_list.slice(right+1)
        if (right === -1) return str_list.slice(0, left)
        
        if (left < right) {
            return str_list.slice(0, left)
        } else {
            return str_list.slice(right+1)
        }
    }
    return [];
}
