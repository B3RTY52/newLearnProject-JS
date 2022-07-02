'use strict';

//эти способы выдают массивоподобный объект HTMLCollection:
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]); //обратиться к отдельному элементу через индекс

const circles = document.getElementsByClassName('circle');
console.log(circles);



//эти способы выдают массивоподобный объект NodeList:
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

//у него появляется метод forEach 
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); //вернет первый элемент с таким классом на странице

