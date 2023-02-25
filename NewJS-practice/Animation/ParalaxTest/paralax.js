'use strict';

const mainEl = document.documentElement;
const imgGO = document.querySelector('.imgContent');

imgGO.addEventListener('click', (e) => {
    const mainElWidth = mainEl.clientWidth; //ширина окна браузера
    const mainElWidthClean = window.innerWidth; //чиста ширина окна браузера без полос прокрутки итп
    const mainElHeight = mainEl.clientHeight; // высота окна браузера пользователя
    const mainElHeightClean = window.innerHeight; //чистая высота окна браузера без полос прокрутки итп
    console.log(mainElWidth);
    console.log(mainElWidthClean);
    console.log(mainElHeight);
    console.log(mainElHeightClean);
})