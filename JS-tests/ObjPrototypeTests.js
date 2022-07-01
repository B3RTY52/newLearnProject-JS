"use strict";

const soldier = {
    armor: 200,
    health: 400,
    sayHallo: function () {
        if (this.health >= 400) {
            console.log('I`m strong mf!');
        }
        if (this.health < 400) {
            console.log('I`m weak =(');
        }
        console.log(`My health is ${this.health}`);
    }
};

const billy = {  //пока что билли просто призывник
    health: 100,
};

const danny = Object.create(soldier); // создаем стандартного солдата дэнни

Object.setPrototypeOf(billy, soldier); //задаем для билли прототип солдата


billy.sayHallo();
danny.sayHallo();