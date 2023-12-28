// 12. Loop through an array using a for-of loop and double each element.
let numbersArr = [2, 7, 3, 5, 10, 13, 8];
let arr = [];
for (let item of numbersArr) {
   arr.push((item *= 2));
}
console.log(arr);