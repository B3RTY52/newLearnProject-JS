/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
    const arrWord = Array.from(word.toLowerCase());
    let arrRes = [];
    for (let i = 0; i < arrWord.length; i++) {
        let checker = arrWord.slice(0);
        checker.splice(i, 1);
        checker.includes(arrWord[i]) ? arrRes.push(')') : arrRes.push('(');
    }
    return arrRes.join('');
}

console.log(duplicateEncode('(( @'));
console.log(duplicateEncode('Success'));
