"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log(Object.keys(options).length);
    }
};

options.makeTest();

const {
    border
} = options.colors;
console.log(border);


//удаляет по ключу все свойство
delete options.makeTest;
console.log(options);

let counter = 0; // для подсчета элементов в объекте
for (let key in options) {
    counter++;
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}
console.log(counter);

console.log(Object.keys(options).length);


// геттеры сеттеры
let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

user.fullName = "Alice Cooper";
console.log(user);
console.log(user.fullName);

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // возраст рассчитывается из текущей даты и дня рождения
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // доступен как день рождения
alert(john.age);      // ...так и возраст (с погрешьностью)

let options1 = {
    title: "Меню"
};

let { width: w = 100, height: h = 200, title } = options1;
console.log(title);

