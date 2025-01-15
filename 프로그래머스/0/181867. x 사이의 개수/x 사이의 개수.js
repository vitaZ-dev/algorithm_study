function solution(myString) {
    var answer = [];
    return myString.split('x').map(s => s.length);
}