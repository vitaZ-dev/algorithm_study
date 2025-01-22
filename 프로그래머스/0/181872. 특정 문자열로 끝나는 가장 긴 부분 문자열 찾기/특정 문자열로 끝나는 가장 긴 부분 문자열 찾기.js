function solution(myString, pat) {
    return myString.slice(0, myString.lastIndexOf(pat.at(-1)) + 1)
}