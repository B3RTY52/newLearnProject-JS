'use strict';

//эти способы выдают массивоподобный объект HTMLCollection:
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[1]); //обратиться к отдельному элементу через индекс
console.log(btns);
const circles = document.getElementsByClassName('circle');
console.log(circles);

const wrapper = document.querySelector('.wrapper');

//эти способы выдают массивоподобный объект NodeList:
const hearts = wrapper.querySelectorAll('.heart');
console.log(hearts);

//у него появляется метод forEach 
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); //вернет первый элемент с таким классом на странице


// как обратиться к стилю? (inline )
box.style.backgroundColor = 'moccasin';
box.style.width = '500px';
//как передать несколько стилей? - cssText
const width = '500px'; //можно пользоваться и переменными
box.style.cssText =
    `height: 200px; border-radius: 15px; width: ${width};`;
//при этом вышетстоящие стили не применятся;


//нельзя задать стиль элементам псевдомассива напрямую
for (let button of btns) {
    button.style.borderRadius = '100%';
} //но можно воспользоваться методом for/of для HTMLCollection

//либо методом forEach для NodeList
hearts.forEach((heart, num) => {
    if (num != 1) {
        heart.style.backgroundColor = 'DarkSalmon';
    }
});



//Создание новых элементов на странице через JS

//создать новый див
const div = document.createElement('div');
//создать текстовый узел
const text = document.createTextNode('There are only 2 circles now!');

//задать класс элементу
div.classList.add('black');

// как добавить новый элемент на страницу?
wrapper.append(div);
hearts[1].after(div);
// before: ...'[]';  after:'[]'...;   append:'[]...';  prepend: '...[]';

//удаление элементов со страницы:
circles[0].remove();
circles[1].after(text);

// замена элементов:
hearts[1].replaceWith(circles[0]);


//вписать текст
div.innerHTML = '<h1 style=font-size:26px;>Hello, white!</h1>';
//div.textContent просто для текста


div.insertAdjacentHTML('beforebegin', '<h2>Hello, black!</h2>');
//метод использует ключевые слова beforebegin afterbegin beforend afterend