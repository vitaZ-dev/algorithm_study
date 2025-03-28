function solution(a, b, c) {
    const check = new Set([a, b, c]).size;
    switch (check) {
        case 1:
            return (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
        case 2:
            return (a+b+c) * (a**2 + b**2 + c**2);
        case 3:
            return a+b+c;
    }
    /*
    if ((a !== b && b !== c && c !== a)) {
        return a + b + c;
    }
    else if ((a===b && b!==c) || (a===c && c!==b) || (b===c && c!==a)) {
        return (a+b+c) * (a**2 + b**2 + c**2)
    }
    else {
        return (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
    }
    */
}