'use strict';

//FETCH API(application programming interface) tech:

//гет-запрос по адресу в скобках:
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json()) // возвращает promise json
    .then((json) => console.log(json)); //затем выводим его в консоль

//то же самое только пост-запрос:
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({ name: 'Alex' }),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then((response) => response.json()) // так же возвращает promise json
    .then((json) => console.log(json)); // затем выводим его в консоль
