'use strict';

const now = new Date();
console.log(now); // получает текущую дату

//принимает год, месяц, день, часы (по гринвичу), минуты, секунды, милисекунды
const myDate = new Date(2022, 6, 25, 5, 33, 46);
console.log(myDate);


//получение компонентов даты (ГЕТТЕРЫ)
console.log(now.getFullYear()); //получить год
console.log(now.getMonth()); //получить месяц
console.log(now.getDate()); //получить день

console.log(now.getDay()); //дает номер дня недели от воскресения (он 0)

console.log(now.getUTCHours()); //дает часы по гринвичу
console.log(now.getHours()); // дает часы по актуальному времени
console.log(now.getTimezoneOffset()); //дает разницу с UTC в минутах

// установить компоненты даты (СЕТТЕРЫ)
console.log(now.setHours(18)); // идет по UTC зоне в консоли, а в браузере нет
console.log(now);


let start = new Date();

for (let i = 0; i < 3000000; i++) {
    let some = i ** 3; //возведение в степень
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);