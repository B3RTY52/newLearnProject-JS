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