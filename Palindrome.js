// 4. Check if a string is a palindrome.
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

let str = "racecar";
console.log(`${str} is ${isPalindrome(str) ? "palindrome" : "not palindrome"}`);