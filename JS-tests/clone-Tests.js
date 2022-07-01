"use strict";

let a = 5,
    b = a; // передача по значению, примитивные данные

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передача по ссылке, сложные данные

copy.a = 10;

console.log(copy);
console.log(obj);

// как скопировать сложный тип данных? варианты:

function copyData(mainObj) { //неглубокая копия объекта
    let copyObj = {};
    let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}

const numbers = {
    a: 1,
    b: 2,
    c: { //данный объект уже не копируется
        z: 3,
        y: 23
    }
};

const numbersCopy = copyData(numbers);
console.log(numbersCopy);
console.log(numbers);

numbers.a = 8;
numbers.c.z = 43;

numbersCopy.b = 11;
numbersCopy.a = 18;
console.log(numbersCopy);
console.log(numbers);

// как соединить объекты:
const add = {
    s: 13,
    d: 42
};

Object.assign(numbers, add); //первый аргумент - адресат, второй - добавка
console.log(numbers, add);

// но тем же способом можно создавать и новые копии объекта:
const cloneObj = Object.assign({}, add);
console.log(cloneObj);
cloneObj.f = 55;
console.log(cloneObj);


// как скопировать массив?
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

oldArray[2] = 'yo yo!';
console.log(newArray, oldArray);

//спред-оператор:
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(video, blogs, internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2, 3];
log(...num);

//поверхностные копии объектов с помощью спред-оператора

const originalObj = { a: 1, b: 2 };
const copyObj = { ...originalObj };
console.log(copyObj);

originalObj.f = 33;
copyObj.d = 12;
console.log(copyObj);
console.log(originalObj);