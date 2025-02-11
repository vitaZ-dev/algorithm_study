function solution([id, pw], database) {
    const db = new Map(database);
    return db.has(id) ? db.get(id) === pw ? 'login' : 'wrong pw' : 'fail';
}