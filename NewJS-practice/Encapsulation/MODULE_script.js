'use strict';

const number = 1;

// Методы создания модулей:

// 1. Анонимная самовызывающаяся функция:
(function () {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);
// применяется для создания отдельной области видимости (модулей)


// 2. Использование объектного интерфейса

const user = (function () {
    const privat = function () {
        console.log('I am private!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();





