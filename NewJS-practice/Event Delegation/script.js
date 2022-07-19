'use strict';

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

console.log(btns);
console.log(btns[0].classList.length); //показывает сколько классов у элемента
console.log(btns[0].classList.item(0));

btns[2].classList.add('blue'); // добавить класс к элементу
btns[0].classList.remove('blue'); // удалить класс у элемента
btns[0].classList.toggle('blue'); // класс есть - удаляет, если нет - добавляет

if (btns[0].classList.contains('some')) { //проверит есть ли такой класс
    console.log('some');
}

btns[0].addEventListener('click', () => {
    //вторая кнопка
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
    //четвертая кнопка
    btns[3].classList.toggle('red');
}); //функционал у них будет одинаковый

console.log(btns[0].className); //выдает строку из имен классов, которые есть
wrapper.addEventListener('click', (event) => {
    //такая формулировка условия рекомендована к соблюдению
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello!');
    }
    if (event.target && event.target.classList.contains('red')) {
        console.log('here is red!');
    }
    //проверить на совпадение
    if (event.target && event.target.matches("button.blue")) {
        console.log('here is blue!');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);