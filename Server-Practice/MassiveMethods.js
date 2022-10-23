'use strict';

//метод FILTER

const names = ['Ivan', 'Anna', 'Ksenia', 'Brunghilda'];

//метод фильтр изменит заданный массив, поэтому нужна вторая переменная
//плюс мы создаем колбэк функцию, которая отфильтрует имена:
const shortNames = names.filter(function (name) {
    return name.length < 5; //вернет те, что короче 5 символов
});
console.log(shortNames);



//метод MAP
//создает новый массив, трансформируя каждый элемент из заданного:

const answers = ['IvAn', 'AnnA', 'KsEnia', 'Hello'];

const result = answers.map(item => item.toLowerCase());
console.log(result);



// методы every / some
//методы возвращают булиновы значения

//метод some проверяет, соответствует ли хоть 1 элемент, заданным условиям:
const some = [4, 'ert', 'DASJ3'];

//метод проверит, есть ли среди элементов число:
console.log(some.some(item => typeof (item) === 'number'));
//метод проверит, есть ли элементы длиннее 5 символов:
console.log(some.some(item => item.length > 5));

//метод every проверяет, чтобы ВСЕ элементы соответствовали условию:
console.log(some.every(item => typeof (item) === 'number'));

const every = [4, 9, 1450]; //массив из номеров
console.log(every.every(item => typeof (item) === 'number'));



//метод REDUCE

const arr = [4, 5, 1, 4, 2, 6];

//задача взять и получить быстро сумму всех этих элементов:
const res = arr.reduce((sum, current) => sum + current, 3);
//при этом sum(первый аргумент) - это аккумулятор, а current - элемент
//при этом в конце, через запятую, задается начальное значение аккумулятора
console.log(res);

//метод reduce также работает и со строками:
const arrStrings = ['apple', 'plum', 'pear'];

// задача сложить фрукты в одну строку через запятую:
const list = arrStrings.reduce((sum, current) => `${sum}, ${current}`);
console.log(list);



//Задача: получить из объекта список имен людей
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);