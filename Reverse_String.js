// 1. Reverse a string without using the built-in reverse() method.
let str1 = "Dave Gray";
let str2 = "";

for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
}

console.log(str2);