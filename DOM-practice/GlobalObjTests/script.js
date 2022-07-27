'use strict';

//глобальные объекты, кроме document:
// window - это окно, в котором показывается наш документ
// screen - это экран (редко используется), это весь монитор пользователя
console.dir(document);
console.dir(window);
console.dir(screen);

const box = document.querySelector('.box'),
    btnOpen = document.querySelector('.button'),
    btnPx = document.querySelector('.px');


//client... - получает только сам элемент по его фактическому размеру
const widthC = box.clientWidth;
const heightC = box.clientHeight;
console.log(widthC, heightC);


//offset - получает элемент + марджины, бордеры и скролл прокрутки(если есть) 
const widthO = box.offsetWidth;
const heightO = box.offsetHeight;
console.log(widthO, heightO);


//sroll - весь фактический размер элемента (а не только его отображаемая часть)
const widthS = box.scrollWidth;
const heightS = box.scrollHeight;
console.log(widthS, heightS);
//развернуть элемент целиком по клику:
btnOpen.addEventListener('click', () => {
    box.style.height = heightS + 'px'; //раскрывает элемент
});

btnPx.addEventListener('click', () => {
    console.log(box.scrollTop); //показывает сколько пикселей отлистано наверху
});
// то же самое только к документу:
// document.documentElement.scrollTop  (!!!)



//рассчитать координаты элемента:
console.log(box.getBoundingClientRect()); //получаем объект с параметрами


//получить как объект все примененные стили (задать нельзя, только получить):
const style = window.getComputedStyle(box); // + к псевдоэлементу через запятую
console.log(style);
console.log(style.display); //обратиться к определенному стилю (запросить)




