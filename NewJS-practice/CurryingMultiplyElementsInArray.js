/* 
To complete this Kata you need to make a function multiplyAll/multiply_all 
which takes an array of integers as an argument. 
This function must return another function, 
which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements 
from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.
*/

function multiplyAll(arr) {
    const result = [];
    return function (num) {
        arr.forEach(el => result.push(el * num));
        return result;
    };
}

console.log(multiplyAll([1, 2, 3])(2));

function getSumOfDigits(integer) {
    var sum = 0;
    var digits = Math.floor(integer).toString();
    for (var ix = 0; ix < digits.length; ix++) {
        sum = sum + (+digits[ix]);
    }
    return sum;
}

console.log(getSumOfDigits(123));