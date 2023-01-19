'use strict';

// функция генератор выдает результаты последовательно по
function* generetor() {
    // ключевое слово yield:
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
};

const str = generetor();

console.log(str.next());
console.log(str.next().value);
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next()); //генератор закончился

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

console.log(counter.next());
console.log(counter.next().value);

// функцию генератор можно запустить целиком, используя перебор:

for (let k of count(7)) {
    console.log(k);
}
