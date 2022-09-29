'use strict';

// JSON (JAVA SCRIPT OBJECT NOTATIONS) - это набор пар "ключ-значение"
// все строки должны быть в двойных кавычках (!!!)

const persone = {
    name: 'alex',
    tel: '+744444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// встроенный метод stringify позволяет форматировать данные 
// для их дальнейшей отправки на сервер:
console.log(JSON.stringify(persone));

// встроенный метод parse позволяет форматировать данные,
// полученные с сервера, в обычный понятный для JS формат:
console.log(JSON.parse(JSON.stringify(persone)));


// (!!!) Создание глубоких копий объекта:
const cloneDeep = JSON.parse(JSON.stringify(persone));


// для примера создаю поверхностную копию:
const clone = persone;
// меняю имя матери у родителей в глубокой копии:
cloneDeep.parents.mom = 'Nino';
// меняю в поверхностной копии имя матери:
clone.parents.mom = 'Ann';
// выведем в консоль для сравнения:
console.log(persone); //имя матери так же поменялось
console.log(clone);
console.log(cloneDeep); // имя матери соответсвует заданному