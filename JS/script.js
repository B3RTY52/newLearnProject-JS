"use strict";

const numberOfFilms = parseInt(prompt('Сколько фильмов Вы уже посмотрели?'));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    makeRank: function () {
        for (let i = 0; i < 2; i++) {
            let
                name = prompt('Один из последних просмотренных фильмов?'),
                rank = parseInt(prompt(
                    `На сколько вы его оцените по десятибальной шкале?`));
            if (name !== null && rank !== null && name.length < 50) {
                personalMovieDB.movies[name] = rank;
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
            personalMovieDB.genres[i] = genre;
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    }
};

if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms < 50) {
    console.log('Вы классический зритель!');
} else if (numberOfFilms > 50) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка, вероятно, было введено некорректное число');
}

personalMovieDB.makeRank();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();