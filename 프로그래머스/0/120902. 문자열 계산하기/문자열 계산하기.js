function solution(my_string) 
{
    // 연산자가 하나만 있다는 보장이 없음!
    return new Function(`return ${my_string}`)();
}
