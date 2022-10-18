'use strict';

//условный пример callback-hell:
console.log('запрос данных...');

setTimeout(() => {
    console.log('подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);

}, 2000);
//суть его в том, что идет много асинхронных действий



//как работает promise:
console.log('запрос данных...');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        //в резолв надо передать какие-то данные (data):
        resolve(product);

    }, 2000);
});

//метод промисов для обработки ПОЛОЖИТЕЛЬНОГО(!!) результата:
req.then((product) => {
    console.log('данные получены');
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
});

