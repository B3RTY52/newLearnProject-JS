"use strict";

function User(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;

    Object.defineProperty(this, "birthday", {
        get() {
            const dateValue = this.dateOfBirth.split(".");
            return new Date(dateValue[2], dateValue[1] - 1, dateValue[0]);
        }
    });

    // возраст рассчитывается из текущей даты и дня рождения
    Object.defineProperty(this, "age", {
        get() {
            let birth = this.dateCounter(this.birthday);
            let dateCur = this.dateCounter(Date());
            let age = function () {
                let ageCount = dateCur[2] - birth[2];
                if (dateCur[0] - birth[0] < 0) {
                    ageCount--;
                }
                if (dateCur[0] - birth[0] == 0 && dateCur[1] - birth[1] < 0) {
                    ageCount--;
                }
                return ageCount;
            };
            return age();
        }
    });
}

// чтобы расшифровать дату
User.prototype.dateCounter = function (date) {
    let arr = `${date}`;
    let dateNum = arr.split(" ").slice(1, 4).map(
        function (value, i) {
            if (i === 0) {
                if (value === 'Jan') {
                    value = 1;
                }
                if (value === 'Feb') {
                    value = 2;
                }
                if (value === 'Mar') {
                    value = 3;
                }
                if (value === 'Apr') {
                    value = 4;
                }
                if (value === 'May') {
                    value = 5;
                }
                if (value === 'Jun') {
                    value = 6;
                }
                if (value === 'Jul') {
                    value = 7;
                }
                if (value === 'Aug') {
                    value = 8;
                }
                if (value === 'Sep') {
                    value = 9;
                }
                if (value === 'Oct') {
                    value = 10;
                }
                if (value === 'Nov') {
                    value = 11;
                }
                if (value === 'Dec') {
                    value = 12;
                }
            }
            return +value;
        });
    return dateNum;
};

let newUser = new User( //username, age);
    prompt('Как Вас зовут?'),
    prompt('Введите Вашу дату рождения в формате ДД.ММ.ГГГГ')
);

alert(`${newUser.name}! На данный момент Вам ${newUser.age + 1}-ой год =)`);
