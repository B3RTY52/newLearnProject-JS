/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" */

function toCamelCase(str) {
    let newStr = '';
    let wordArr = str.split(/[-_]/g);
    for (let i in wordArr) {
        if (i > 0) {
            newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        } else {
            newStr += wordArr[i];
        }
    }
    return newStr;
}

console.log(toCamelCase("The_stealth_Warrior"));

