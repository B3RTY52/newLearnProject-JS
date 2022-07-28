'use strict';

// ES-5:

const num = new Number(3);
console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () { //но есть более хороший вариант
        console.log(`${this.name}, hello!`);
    };
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);
alex.human = false;
console.log(ivan, alex);

alex.hello = function () {
    console.log(`${this.name} is an alien!`);
};

ivan.hello();
alex.hello();

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} вышел`);
};

alex.exit();