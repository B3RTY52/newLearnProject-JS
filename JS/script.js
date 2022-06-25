"use strict";

const arr = [41, 2, 7, 22, 13, 56, 8];

arr.pop(); //удаляет последний элемент массива
console.log(arr);

arr.push(10); // добавляет элемент в конец массива
console.log(arr);

//обычный цикл перебора
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//метод for - of работает аналогично / здесь работают break и continue
for (let value of arr) {
    console.log(value);
}

// метод принимает три аргумента: элемент, индекс, сам массив
arr.forEach(function (item, i, arr) {
    console.log(
        `под индексом ${i}: будет элемент ${item} в массиве ${arr}`);
});

//sort по умолчанию сортирует как строки
arr.sort();
console.log(arr);

// чтоб sort заработал по числам, ему надо задать функцию
function compareNum(a, b) {
    return a - b;
}
arr.sort(compareNum);
console.log(arr);

// глюки массивов:
arr[99] = 0;
console.log(arr.length);
console.log(arr); //будет 94 пустых элемента