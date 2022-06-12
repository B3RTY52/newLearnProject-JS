"use strict";

const numberOfFilms = parseInt(prompt('Сколько фильмов Вы уже посмотрели?'));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        makeRank: function () {
            for (let i = 0; i < 2; i++) {
                let
                    name = prompt('Один из последних просмотренных фильмов?'),
                    rank = parseInt(prompt(
                        `На сколько вы его оцените по \
                десятибальной шкале? (введите число)`));
                if (name !== null && rank !== null && name.length < 50) {
                    personalMovieDB.movies[name] = rank;
                } else {
                    console.log('Error');
                    i--;
                }
            }
        }
    },
    actors: {},
    genres: {},
    privat: false,
};

// const
//     movieName = prompt('Один из последних просмотренных фильмов?'),
//     movieRank = parseInt(prompt(
//         'На сколько вы его оцените по десятибальной шкале? (введите число)')),
//     secondMovieName = prompt(
//         'А можно еще один из последних просмотренных фильмов?'),
//     secondMovieRank = parseInt(prompt(
//         'А этот на сколько оцените по десятибальной шкале? (введите число)'));

// personalMovieDB.movies.makeRank(movieName, movieRank);
// personalMovieDB.movies.makeRank(secondMovieName, secondMovieRank);

if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms < 50) {
    console.log('Вы классический зритель!');
} else if (numberOfFilms > 50) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка, вероятно, было введено некорректное число');
}

personalMovieDB.movies.makeRank();
console.log(personalMovieDB.movies);