/* 
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace 
the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
    return str ? (str + '_').match(/.{2}/g) : [];
}

console.log(solution('abcdef'));
console.log(solution('abc'));
console.log(solution(' '));