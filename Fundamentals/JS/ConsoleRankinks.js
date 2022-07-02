"use strict";

const numberOfFilms = parseInt (prompt ('Сколько фильмов Вы уже посмотрели?'));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        makeRank: function (name, rank) {
            this[name] = rank;
        }
    },
    actors: {},
    genres: {},
    privat: false,
};

const 
    movieName = prompt ('Один из последних просмотренных фильмов?'),
    movieRank =  parseInt (prompt (
    'На сколько вы его оцените по десятибальной шкале? (введите число)')),
    secondMovieName = prompt (
        'А можно еще один из последних просмотренных фильмов?'),
    secondMovieRank =  parseInt (prompt (
    'А этот на сколько оцените по десятибальной шкале? (введите число)'));

personalMovieDB.movies.makeRank(movieName, movieRank);
personalMovieDB.movies.makeRank(secondMovieName, secondMovieRank);
