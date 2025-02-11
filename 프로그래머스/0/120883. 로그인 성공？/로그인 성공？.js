function solution([id, pw], db) {
    const [idCheck] = db.filter(d => d[0] === id);
    if (!idCheck) return "fail";
    if (idCheck[1] !== pw) return "wrong pw";
    return "login";
}