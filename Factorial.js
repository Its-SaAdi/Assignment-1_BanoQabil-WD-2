// 10. Calculate the factorial of a number using a do-while loop.
let fact = 1;
let num = 10;
let i = num;

do {
    fact *= i--;
} while (i > 0);

console.log(`Factorial of ${num}! is ${fact}`);