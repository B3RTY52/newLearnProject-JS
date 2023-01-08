'use strict';


// как мы обычно создаем объекты?
function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`Имя пользователя ${this.name}, возраст ${this.age}`);
    };
}

// создадим объект Иван:
const ivan = new User('Ivan', 27);
ivan.say();

//однако у Ивана можно извне поменять все его параметры:
ivan.age = 34;
ivan.name = 'Alex';
ivan.say();

// 1. Поробуем это пофиксить с помощью инкапсуляции:
function ImprovedUser(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function () {
        console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
    };

    //2. Метод инкапсуляции через геттеры и сеттеры:
    this.getAge = function () {
        return userAge;
    };

    this.setAge = function (age) {
        //дополнительным плюсом является возможность ввести проверки для ввода:
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!');
        }
    };
}

// 1.
// создадим также объект Иван:
const newIvan = new ImprovedUser('Ivan', 27);
newIvan.say();
//теперь параметры защищены от досутпа извне:
newIvan.age = 34;
newIvan.say();
console.log(newIvan.userAge); //ничего не получается
// 1.

// 2.
console.log(newIvan.getAge());
newIvan.setAge(32);
newIvan.say();
// .2


// То же самое на ES6+
class NewUser {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    // Задать ПРИВАТНОЕ свойство классу (экспериментальный синтаксис):
    #surname = 'Petrichenko';

    // переделаем под стрелочную функцию, чтоб не терять контекста (Chrome):
    say = () => {
        console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

}


//меняем значения, исопльзуя геттеры и сеттеры:
const alex = new NewUser('Alex', 30);
alex.say();
console.log(alex.age);
alex.age = 32;
alex.say();

// c приватным свойством:
console.log(alex.surname);
alex.surname = 'Ivanov';
console.log(alex.surname);
alex.say();

