// 14. Find the maximum of three numbers using nested ternary operators.
let num1 = 4;
let num2 = 7;
let num3 = 10;
let max;

max = (num1 > num2) ? 
    (num1 > num3 ? num1 : num3) : 
    (num2 > num3 ? num2 : num3)
    
console.log(`Maximum of ${num1}, ${num2} and ${num3} is ${max}`);