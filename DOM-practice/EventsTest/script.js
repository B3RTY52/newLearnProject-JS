'use strict';

// первый вариант назначения события сделан в файле index.html

//второй вариант:

const btn = document.querySelectorAll('button'),
    link = document.querySelector('a');

btn[1].onclick = function () {
    alert('one more click');
};
//минус такого варианта, что он назначает на элемент события только 1 функцию

//следующий вариант

btn[2].addEventListener('click', () => {
    alert('and click again');
});

// события происходят в порядке очереди:
btn[2].addEventListener('click', () => {
    alert('it`s double Click!');
});

//указать среди множества элементов конкретный элемент события
btn.forEach(button =>
    button.addEventListener('mouseenter', (e) => console.log(e.target),
        { once: true })); // !!события могут иметь опции!! это 3 аргумент

// удалить событие (альтернатива опциям):
const deleteEvent = (e) => {
    let i = 1;
    console.log(e.target);
    i++;
    if (i !== 1) {
        link.removeEventListener('mouseenter', deleteEvent);
    }
};

link.addEventListener('mouseenter', deleteEvent);

//отменять стандартные браузерные события:
link.addEventListener('click', (e) => e.preventDefault());