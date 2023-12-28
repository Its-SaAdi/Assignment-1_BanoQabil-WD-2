// 7. Remove all duplicates from an array without built-in methods.
let array1 = [1, 2, 3, 4, 2, 3, 5, 6, 1];
let array2 = [];
for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        continue;
    }
    array2.push(array1[i]);
}
console.log(array2);