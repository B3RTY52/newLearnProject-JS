'use strict';

// AJAX - Asynchronous JavaScript And XML
// нужна для обмена данными без перезагрузки проекта

const inputRub = document.querySelector('#rub'),
    inputUSD = document.querySelector('#usd');



// inputRub.addEventListener ('change', () =>
// событие change происходит, когда input выходит из фокуса (переключается)
// событие input - более универсальное, это любые изменения в поле:
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    //метод собирает настройки для запроса и имеет следующие аргументы:
    // request.open(method, url, async, login, password); 
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type',
        'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Что-то пошло не так";
        }
    });

    // более правильный вариант того же события:
    // request.addEventListener('load', () => {
    //     if (request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUSD.value = "Что-то пошло не так";
    //     }
    // });

});