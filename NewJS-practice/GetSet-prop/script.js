'use strict';

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

//используем геттер, скобки не нужны:
console.log(persone.userAge);

//используем сеттер, задаем новое значение
// скобки не нужны, функция одноименная:
console.log(persone.userAge = 30);