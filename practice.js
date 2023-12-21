// 1. Reverse a string without using the built-in reverse() method.
// let str1 = "Dave Gray";
// let str2 = "";

// for (let i = str1.length - 1; i >= 0; i--) {
//     str2 += str1[i];
// }

// console.log(str2);

// 2. Count the number of vowels in a given string.
function countVowels(paragraph) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    for (let char of paragraph) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}

let paragraph = "The quick brown fox jumps over the lazy dog";
console.log(`Vowels present in a paragraph are: ${countVowels(paragraph.toLowerCase())}`);

// 3. Convert the first letter of each word in a sentence to uppercase.