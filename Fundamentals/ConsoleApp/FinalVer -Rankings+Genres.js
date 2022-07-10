"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = parseInt(
            prompt('Сколько фильмов Вы уже посмотрели?'));
        while (this.count === '' || this.count === null || isNaN(this.count)) {
            this.count = parseInt(
                prompt('Сколько фильмов Вы уже посмотрели?'));
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('просмотрено довольно мало фильмов');
        } else if (this.count > 10 && this.count < 30) {
            console.log('Вы классический зритель!');
        } else if (this.count > 30) {
            console.log('Вы киноман!');
        } else {
            console.log(
                'Произошла ошибка, вероятно, было введено некорректное число');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let
                name = prompt('Один из последних просмотренных фильмов?'),
                rank = parseInt(prompt(
                    `На сколько вы его оцените по десятибальной шкале?`));
            if (name !== null && rank !== null && name.length < 50) {
                this.movies[name] = rank;
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre =
                prompt(`Назовите ваш любимый жанр под номером ${i}`);
            if (genre !== null && genre !== "") {
                this.genres[i - 1] = genre;
            } else {
                console.log('Вы указали некорректное значение');
                i--;
            }
        }
        this.genres.forEach((genre, i) =>
            console.log(
                `Ваш любимый жанр #${i + 1} - ${genre}`));
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (!this.privat) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }
};



