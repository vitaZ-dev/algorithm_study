function solution(score) {
  return score.map(([x, y]) => {
    return (
      score.filter(([a, b]) => (a + b) / 2 > (x + y) / 2).length + 1
    );
  });
}