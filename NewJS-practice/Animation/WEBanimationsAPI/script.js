'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

//   первый аргумент - массив для анимации,
const phoneAnimation = images[0].animate([
    { transform: 'translateY(0)' },
    {},
    {}
]); 