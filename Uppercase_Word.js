// 3. Convert the first letter of each word in a sentence to uppercase.
let sentence = "The quick brown fox jumps over the lazy dog";
let words = sentence.split(" ");
for(let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));