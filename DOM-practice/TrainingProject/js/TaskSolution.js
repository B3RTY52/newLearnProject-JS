/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const movieList = document.querySelector('.promo__interactive-list'),
        approveBtn = document.querySelector('form'),
        newMovieInput = document.querySelector('.adding__input'),
        favorite = document.querySelector('[type="checkbox"]'),
        adv = document.querySelectorAll('.promo__adv img');

    document.querySelector('.promo__genre').textContent = 'Драма';

    document.querySelector('.promo__bg').style.background =
        'url("../TrainingProject/img/bg.jpg") center center/cover no-repeat';

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ],
    };

    const removeAdv = (arr) => {
        arr.forEach(el => el.remove());
    };

    function listRender(films, parent) {
        parent.innerHTML = '';
        movieDB.movies.sort();
        films.forEach((movie, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${movie}
        <div class="delete"></div></li>
    `;
        });
        document.querySelectorAll('.delete').
            forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    films.splice(i, 1);
                    listRender(films, parent);
                });
            });
    }

    const sortArr = (arr) => {
        arr.sort();
    };

    approveBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        let newMovie = newMovieInput.value;
        if (newMovieInput.value) {
            if (newMovie.length > 21) {
                newMovie = newMovie.slice(0, 20) + '...';
            }
            if (favorite.checked == true) {
                console.log("Добавляем любимый фильм");
                favorite.checked = false;
            }
            movieDB.movies.push(newMovie);
            listRender();
            // newMovieInput.value = '';
            e.target.reset();
        }
    });

    listRender(movieDB.movies, movieList);
    removeAdv(adv);

});