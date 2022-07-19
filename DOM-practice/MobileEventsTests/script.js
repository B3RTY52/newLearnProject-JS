'use strict';


//touchstart - первое касание экрана
//touchmove - срабатывает при смещении пальца по элементу
//touchend - палец убирается с элемента
//touchenter - когда палец идет по экрану и заходит в пределы нужного элемента
//touchcancel - когда прикосновение больше не фиксируется на событии

window.addEventListener('DOMContentLoaded', () => {


    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => { //по нажатию
        e.preventDefault();
        console.log('start');
        console.log(e.touches); //подробнее ниже 
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => { //движение пальцем
        e.preventDefault();
        console.log('start move');
    });

    box.addEventListener('touchend', (e) => { //палец убрали
        e.preventDefault();
        console.log('finger out');
    });

});

//touches - список всех пальцев, которые касаются экрана сейчас
//targetTouches - список всех пальцев, которе касаюстя определенного элемента
//changedTouches - палец, который был убран, либо иные изменения