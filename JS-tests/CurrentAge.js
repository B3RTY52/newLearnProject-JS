"use strict";

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // возраст рассчитывается из текущей даты и дня рождения
    Object.defineProperty(this, "age", {
        get() {
            // let todayYear = new Date().getFullYear();
            // return todayYear - this.birthday.getFullYear();
            const date = new Date();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday);

// const dateString = new Date();
// const dateArr = dateString.split("-");
// console.log(dateString);

// const dateString = Date().split(" ").slice(1, 4).map(
//     function (value, i) {
//         if (i === 0) {
//             if (value === 'Jan') {
//                 value = 1;
//             }
//             if (value === 'Feb') {
//                 value = 2;
//             }
//             if (value === 'Mar') {
//                 value = 3;
//             }
//             if (value === 'Apr') {
//                 value = 4;
//             }
//             if (value === 'May') {
//                 value = 5;
//             }
//             if (value === 'Jun') {
//                 value = 6;
//             }
//             if (value === 'Jul') {
//                 value = 7;
//             }
//             if (value === 'Aug') {
//                 value = 8;
//             }
//             if (value === 'Sep') {
//                 value = 9;
//             }
//             if (value === 'Oct') {
//                 value = 10;
//             }
//             if (value === 'Nov') {
//                 value = 11;
//             }
//             if (value === 'Dec') {
//                 value = 12;
//             }
//         }
//         return  +value;
//     });

// console.log(dateString);