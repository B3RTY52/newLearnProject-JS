'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img'),
    imageMac = document.querySelector('.computer');

//   первый аргумент - массив для анимации,
// const phoneAnimation = images[0].animate([
//     { transform: 'translateY(0)' },
//     { transform: 'translateY(100px)' },
//     { transform: 'translateY(_100px)' },
//     { transform: 'translateY(0)' }
// ], {
//     duration: 3000,
//     iterations: Infinity
// }); 

let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            },
            {
                transform: 'translateY(100px) rotate(90deg)',
                filter: 'opacity(30%)'
            },
            {
                transform: 'translateY(-100px) rotate(180deg)',
                filter: 'opacity(60%)'
            },
            {
                transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});

function catchMe(a, b) {
    imageMac.animate([
        {
            transform: `translate(${a}px, ${b}px)`,
        },
        {
            transform: `translate(${a}px, ${b}px)`,
        },
        {
            transform: `translate(${a}px, ${b}px)`,
        }
    ], {
        duration: 500,
        iterations: Infinity
    });
}

imageMac.addEventListener('mouseover', () => {
    const moveCounter = setInterval(() => {
        let a = (Math.random() * 1000).toFixed(),
            b = (Math.random() * 100).toFixed();
        console.log(a);
        catchMe(a, b);
    }, 500);

    setTimeout(() => {
        clearInterval(moveCounter);
        console.log('stop');
    }, 15000);

});


