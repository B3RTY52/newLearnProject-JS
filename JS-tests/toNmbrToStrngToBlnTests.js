"use strict";

//to string

// 1) String(); 
console.log(typeof (String(null)));
console.log(typeof (String(4522)));

// 2) concatenation (конкатинация, присодениение по цепочке);
console.log(typeof (5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';
console.log(fontSize);


//to number

//1) Number();
console.log(typeof (Number('4522')));

//2) +
console.log(typeof (+ '4522'));

//3)
console.log(parseInt('25px'));


//To boolean

// 0, '', null, undefined, NaN; - всегда false

//1) native method;
let switcher = null;
if (switcher) {
    console.log('in progress...');
}

switcher = 1;
if (switcher) {
    console.log('in progress...');
}

//2) Boolean();
console.log(typeof (Boolean('4522')));

//3) !! 
console.log(typeof (!!'4522'));