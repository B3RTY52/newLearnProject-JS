/* 
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. 
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
    return url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\b\..+/, '');
}

console.log(domainName('http://git_hub.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));
console.log(domainName("www.xakep.ru"));