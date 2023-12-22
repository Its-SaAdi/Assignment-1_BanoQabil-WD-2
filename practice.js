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
//     let left = 0, right = str.length - 1;
//     let palindrome = true;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             palindrome = false;
//         }
//         left++;
//         right--;
//     }
//     return palindrome;
// }

// let str = "racecar";
// console.log(`${str} is ${isPalindrome(str) ? "palindrome" : "not palindrome"}`);

// 5. Find the sum of all positive numbers in an array.
// let array = [95, 34, 65, 72, 21];
// let sum = 0;
// array.forEach(item => sum += item);
// console.log(`Sum of all positive numbers is ${sum}`);

// 6. Find the index of the first occurrence of a specific element in an array.
