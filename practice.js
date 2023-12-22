// 1. Reverse a string without using the built-in reverse() method.
// let str1 = "Dave Gray";
// let str2 = "";

// for (let i = str1.length - 1; i >= 0; i--) {
//     str2 += str1[i];
// }

// console.log(str2);

// 2. Count the number of vowels in a given string.
// function countVowels(paragraph) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelsCount = 0;
//     for (let char of paragraph) {
//         if (vowels.includes(char)) {
//             vowelsCount++;
//         }
//     }
//     return vowelsCount;
// }

// let paragraph = "The quick brown fox jumps over the lazy dog";
// console.log(`Vowels present in a paragraph are: ${countVowels(paragraph.toLowerCase())}`);

// 3. Convert the first letter of each word in a sentence to uppercase.
// let sentence = "The quick brown fox jumps over the lazy dog";
// let words = sentence.split(" ");
// for(let i = 0; i < words.length; i++) {
    //     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// console.log(words.join(" "));

// 4. Check if a string is a palindrome.
// function isPalindrome(str) {
    // let left = 0;
    // let right = str.length - 1;

    // while (left < right) {
    //     if (str[left] !== str[right]) {
    //         return false;
    //     }
    //     left++;
    //     right--;
    // }
    // return true;
// }

// let str = "racecar";
// console.log(`${str} is ${isPalindrome(str) ? "palindrome" : "not palindrome"}`);

// 5. Find the sum of all positive numbers in an array.
// let array = [95, 34, 65, 72, 21];
// let sum = 0;
// array.forEach(item => sum += item);
// console.log(`Sum of all positive numbers is ${sum}`);

// 6. Find the index of the first occurrence of a specific element in an array.
// let element = 79;
// let array = [57, 34, 66, 79, 28, 13, 79, 48];
// console.log(`Index of element's first occurrence is ${array.indexOf(element)}`);

// 7. Remove all duplicates from an array without built-in methods.
// let array1 = [1, 2, 3, 4, 2, 3, 5, 6, 1];
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//         continue;
//     }
//     array2.push(array1[i]);
// }
// console.log(array2);

// 8. Sort the array in ascending and descending without built-in methods.
// let arrToSort = [57, 34, 66, 79, 28, 13, 84, 48, 11, 90];
// function compare1(a, b) {
//     return a-b;
// }
// function compare2(a, b) {
//     return b-a;
// }
// console.log(`Ascending order: ${arrToSort.sort(compare1)}`);
// console.log(`Descending order: ${arrToSort.sort(compare2)}`);

// 9. Print all even numbers between 1 and 20 using a while loop.
// let i = 1;
// while (i <= 20) {
//     if (i % 2 == 0)
//     console.log(i);
// i++;
// }

// 10. Calculate the factorial of a number using a do-while loop.
// let fact = 1;
// let num = 10;
// let i = num;

// do {
//     fact *= i--;
// } while (i > 0);

// console.log(`Factorial of ${num}! is ${fact}`);

// 11. Iterate through the properties of an object using a for-in loop.
// const insta_profile = {
    //     username: "@shardha_khapra",
//     no_of_posts: 195,
//     followers: 569000,
//     following: 4,
//     bio: `#Entrepreneur,\n\tApna College | Ex-Microsoft, DRDO\n\tTo educate someone is the highest privilege ♥`,
// }

// for(let key in insta_profile) {
//     console.log(`${key}: ${insta_profile[key]}`);
// }

// 12. Loop through an array using a for-of loop and double each element.
// let numbersArr = [2, 7, 3, 5, 10, 13, 8];
// let arr = [];
// for (let item of numbersArr) {
    //     arr.push(item *= 2);
    // }
    // console.log(arr);
    
// 13. Check if a number is even or odd and return a corresponding message.
// let num = 10;
// console.log(num % 2 == 0 ? `${num} is Even` : `${num} is Odd`);

// 14. Find the maximum of three numbers using nested ternary operators.
// let num1 = 4;
// let num2 = 7;
// let num3 = 10;
// let max;

// max = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3)
// console.log(`Maximum of ${num1}, ${num2} and ${num3} is ${max}`);

// 15. Determine if a year is a leap year or not.
// let year = 1992;

// if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) 
//     console.log(`${year} is a leap year`);
// else 
//     console.log(`${year} is not a leap year`);