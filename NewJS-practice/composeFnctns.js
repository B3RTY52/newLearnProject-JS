'use strict';

/*
Задание:
В математике есть такое понятие, как композиция функций. 
В программирование этот прием тоже перекочевал 
и является весьма удобным в части ситуаций.
Допустим, у вас есть отдельные функции, которые в итоге вычисляют скидку:

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

В итоге мы получим результат, но эта цепочка не совсем удобна. 
А если действий там будет много? Можно запустить её вот так:

// result = a(b(c(x)))
const discount = normalizePrice(divide100(multiply20(200)));
Но при увеличении количества функций это превратиться в нечитаемый ад. 
И вот задача состоит в том, чтобы написать функцию compose, 
которая будет принимать все эти функции и делать тоже самое. 
То есть, организовывать композицию функций. 
Обратите внимание на порядок записи функций - последняя записанная 
запускается первой и дальше справа налево. 

const discount = compose(normalizePrice, divide100, multiply20);
discount(200.0);
Функций может быть сколько угодно 
и они могут принимать только один начальный аргумент. 

Так что вариант:

const compose = (a, b, c) => (x) => a(b(c(x)));

Не подходит, так как работает только с 3мя функциями.

Усложненное задание!
А теперь напишите функцию композиции composeWithArgs, 
которая принимает сколько угодно аргументов в начале. Пример:

    const add1 = function(a){return a + 1}
    const addAll3 = function(a,b,c){return a + b + c}
    composeWithArgs(add1,addAll3)(1,2,3)  => Вернет 7

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. 
Помните, что вариантов решения всегда несколько. 

const composeWithArgs = () => { };
*/

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

const discount = compose(normalizePrice, divide100, multiply20)(200);
console.log(discount);

/*А теперь напишите функцию композиции composeWithArgs, 
которая принимает сколько угодно аргументов в начале. 
Пример:

const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}
composeWithArgs(add1,addAll3)(1,2,3)  => Вернет 7 
    
const composeWithArgs = () => {};
*/

const composeWithArgs = (...fns) =>
    fns.reduceRight((res, fn) => (...args) => fn(res(...args)));

const add1 = function (a) {
    return a + 1;
};

const addAll3 = function (a, b, c) {
    return a + b + c;
};

console.log(composeWithArgs(add1, addAll3)(1, 2, 3));