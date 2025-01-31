function Fibonacci(n) {
    if(n<0) return 0;
    let arrFibo = [0,1]
    if (n === 0 || n === 1) return arrFibo[n];
    return Fibonacci(n-1) + Fibonacci(n-2);
}
export {Fibonacci};