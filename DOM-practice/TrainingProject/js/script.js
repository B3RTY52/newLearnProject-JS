/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

// const adv = document.querySelectorAll('.promo__adv img');
document.querySelectorAll('.promo__adv img')
    .forEach(el => el.remove());

// const genre = document.querySelector('.promo__genre');
document.querySelector('.promo__genre').textContent = 'Драма';

// const poster = document.querySelector('.promo__bg');
document.querySelector('.promo__bg').style.background =
    'url("../TrainingProject/img/bg.jpg") center center/cover no-repeat';

movieDB.movies.sort();

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.forEach((movie, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${movie}
        <div class="delete"></div></li>
    `;
});


// document.querySelectorAll('.promo__interactive-item')
//     .forEach((movie, i) => movie.innerHTML = `${i + 1} ${movieDB.movies[i]}`);