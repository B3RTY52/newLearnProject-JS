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

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

document.querySelectorAll('.promo__adv img')
    .forEach(el => el.remove());

document.querySelector('.promo__genre').textContent = 'Драма';

document.querySelector('.promo__bg').style.background =
    'url("../TrainingProject/img/bg.jpg") center center/cover no-repeat';

movieDB.movies.sort();

const movieList = document.querySelector('.promo__interactive-list');

function listRender() {
    movieList.innerHTML = '';
    movieDB.movies.forEach((movie, i) => {
        movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${movie}
        <div class="delete"></div></li>
    `;
    });
}

listRender();

const approveBtn = document.querySelector('.add button'),
    newMovieInput = document.querySelector('.adding__input');

approveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let newMovie = newMovieInput.value;
    if (newMovie.length > 21) {
        newMovie = newMovie.slice(0, 20) + '...';
    }
    movieDB.movies.push(newMovie);
    movieDB.movies.sort();
    listRender();
    newMovieInput.value = '';
});

const deleteBtn = document.querySelectorAll('.delete');
console.log(deleteBtn);


// deleteBtn.parentElement.addEventListener('click', () => {
//     if (deleteBtn) {
//         console.log(1);
//     }
// });