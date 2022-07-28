'use strict';

// 'this':
function showThis() {
    console.log(this);
}

showThis();
// 1) обычная функция this = window, при 'use strict' this = undefined

function showThisDouble(a, b) {
    console.log(this);
    function sum() {
        console.log((this));
        return a + b;
    }
    console.log(sum());
}

showThisDouble(4, 5);
// тут срабатало замыкание

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);
    }
};
obj.sum();
// 2) контекст у методов объекта - это сам объект

const obj2 = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj2.sum();
// при вызове функции внутри метода контекст теряется


function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`${this.name}, hello!`);
    };
}
const ivan = new User('Ivan', 28);
// 3) this в конструкторах и классах - это новый экземпляр объекта


//ручное присвоение контекста:
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const human = {
    name: 'john'
};

sayName.call(human, 'Smith'); //отличаются синтаксисом для передачи свойств
sayName.apply(human, ['Smith']); //в этом случае передаются в виде массива
// мы просто подвязали контекст к готовой функции


function count(num) {
    return this * num;
}

const double = count.bind(2); //привязали(забиндили) контекст
console.log(double(3));
// 4) это ручная привязка this через call, apply и bind


const btn = document.querySelector('button');

btn.addEventListener('click', function () { //a при => вызове контекста не будет
    console.log(this);
    this.style.background = 'red';
});
//при таком вызове функции (в классическом режиме) this будет сам элемент

const obj3 = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this); //нет своего контекста, вызовет сам объект
        };
        say();
    }
};

obj3.sayNumber();

const calc = (a) => { //при 1 аргументе скобки можно не писать
    return a * 2;
}; //сложный синтаксис, не используется при однострочечных выражениях

const calc2 = a => a * 2; //та же самая функция 

console.log(calc2(4));