/* Given an integer x, return true if x is a palindrome , 
and false otherwise. 
Example 1: 
Input: x = 121 Output: true 
Explanation: 121 reads as 121 from left to right and from right to left. 
Example 2: 
Input: x = -121 
Output: false 
Explanation: From left to right, it reads -121. 
From right to left, it becomes 121-. 
Therefore it is not a palindrome. 
Example 3: 
Input: x = 10 
Output: false 
Explanation: Reads 01 from right to left. 
Therefore it is not a palindrome. 
Constraints: -231 <= x <= 231 - 1 
Follow up: Could you solve it without converting the integer to a string? */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {

    const toArr = function (x) {
        let a = 0;
        const arr = [];
        while (x > 0) {
            a = x % 10;
            if (a == 0) {
                x = x / 10;
                arr.push(0);
            } else {
                x = (x - a) / 10;
                arr.push(a);
            }
        }
        return arr;
    };

    if (x === 0 || (x > 0 &&
        JSON.stringify(toArr(x)) === JSON.stringify(toArr(x).reverse()))) {
        return true;
    } else {
        return false;
    }
};


console.log(isPalindrome(0));
console.log(isPalindrome(10));
console.log(isPalindrome(-121));
console.log(isPalindrome(121));