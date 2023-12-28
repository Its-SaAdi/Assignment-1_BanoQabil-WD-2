function countVowels(paragraph) {
   const vowels = ["a", "e", "i", "o", "u"];
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