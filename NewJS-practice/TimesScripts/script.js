'use strict';

const timerId = setTimeout(function (text) { //таймаут выполняется единоразово!
    console.log(text);
    //второй параметр - время в милисекукндах (1\1000 секунд)
}, 2000, 'hello!'); //третий параметр - аргумент для включенной функции


//таймеры задают через переменную, чтобы ранжировать заданное им время 
const timerEx = setTimeout(logger, 3000);

function logger() {
    console.log('text');
}

clearInterval(timerEx); //аннулирует таймер в аргументе



const btn = document.querySelector('.btn');
let interval,
    i = 0;
btn.addEventListener('click', () => {
    //сетИнтервал выполняется многократно:
    interval = setInterval(function (text) {
        if (i === 3) {
            clearInterval(interval);
        }
        console.log(text);
        i++;
    }, 1000, 'hello!');
});
//такой способ плох тем, что при перенагруженности основной функции интервал теряется


//рекурсивный таймаут (более хорошая альтернатива интервалу)
// let id = setTimeout(function log(i) {
//     console.log('hi!');
//     id = setTimeout(log, 500);
// }, 500);

const elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    const startMove = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

elem.addEventListener('click', myAnimation);

