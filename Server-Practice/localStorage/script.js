'use strict';

//localStorage - глобальный объект, хранит до 5мб данных
// window.localStorage

// // вносит в объект ключ/значение:
// localStorage.setItem('number', 5);

// // localStorage.getItem получить значение по ключу:
// console.log(localStorage.getItem('number')); //5

// // удалить пару ключ\значение:
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number')); //null

// // очистить локальное хранилище:
// localStorage.clear(); 

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'brown';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', 'true');
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'brown';
    }
});

const man = {
    name: 'ALbert',
    age: 32
};

//чтоб внести в localStorage объект его надо перевести в JSON
const objToStorage = JSON.stringify(man);
localStorage.setItem('albert', objToStorage);
console.log(JSON.parse(localStorage.getItem('albert')));