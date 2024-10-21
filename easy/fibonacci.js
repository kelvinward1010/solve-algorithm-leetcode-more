function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Số lượng phần tử trong dãy Fibonacci cần tạo
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacci(numberOfTerms);

console.log("Dãy số Fibonacci là:", fibonacciSequence.join(', '));
// Output: Dãy số Fibonacci là: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
