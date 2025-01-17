function solution(price) {
    if (price < 100000) return price;
    else if (price < 300000) return Math.trunc(price*0.95);
    else if (price < 500000) return Math.trunc(price*0.9);
    else return Math.trunc(price*0.8);
}