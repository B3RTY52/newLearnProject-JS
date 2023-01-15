'use strict';

// коснтрукция, которая ловит ошибки:
try {
    console.log('normal');
    console.log(a);
    console.log('result');
} catch (error) {
    console.log(error.name); //название ошибки
    console.log(error.message); //описание ошибки
    console.log(error.stack); // развернутое описание в консоли разработчика
} finally {
    // функционал, который выполнится в любом случае (с ошибкой или без):
    console.log('все равно выведется!');
}

console.log('still normal');


// Как это работает на практике?

try {
    document.querySelector('.active').addEventListener('click', () =>
        console.log('click!'));
} catch (error) { }

// document.querySelector('.active').addEventListener('click', () =>
//     console.log('click!'));