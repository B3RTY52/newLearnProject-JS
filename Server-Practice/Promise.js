'use strict';

//пример колбэк функции:
function func1(callback) {
    setTimeout(() => {
        console.log('first goes this!');
        callback();
    }, 1500);
}
function func2() {
    setTimeout(() => {
        console.log('now this!');
    }, 500);
}

func1(func2);
//функция 1 выполняется сначала, лишь затем функция 2 (колбэк)


//условный пример callback-hell (много всего асинхронного в одном):
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

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        //в resolve() надо передать какие-то данные (data):
        resolve(product);

    }, 2000);
});


//метод .then для обработки ПОЛОЖИТЕЛЬНОГО(!!) результата:

// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         console.log('данные получены');
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// //второй промис используется как коллбэк (можно избежать):
//     req2.then(data => {
//         console.log(data);
//     });
// });

// тот же код, только в более удобоваримом формате:
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            // resolve(product);
            //чтоб спровоцировать ошибку:
            reject();
        }, 2000);
    });
}).then(data => {
    console.log('данные получены');
    console.log(data);
    data.modify = true;
    return data;
    //можно задать последовательность выполнения функций:
}).then(data => {
    console.log(data);
    //сработает при возникновении ошибки и пропустит все then:
}).catch(() => {
    console.error('Произошла ошибка!');
    //метод .finally срабатывает в конце вне зависимости от ошибок и т.п:
}).finally(() =>
    console.log('finally'));
///////////////////


//еще о методах promise

