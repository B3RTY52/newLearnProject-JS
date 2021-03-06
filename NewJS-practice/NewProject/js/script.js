"use strict";

window.addEventListener('DOMContentLoaded', () => {

    //TABS:
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';  // inline-style
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block'; // inline-style
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //TIMER
    const deadline = '2022-12-31';

    function getTimeRemaining(endtime) {
        //получаем милисекунды от сейчас до окончания таймера:
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);


    //MODAL

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

    function togglerModal() {
        modal.classList.toggle('show');
        if (modal.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''; //поставить настройки по дефолту
        }
        clearInterval(modalTimerID);
    }

    modalTrigger.forEach(btn => btn.addEventListener('click', togglerModal));

    modalClose.addEventListener('click', togglerModal);

    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            togglerModal();
        }
    });

    // чтоб окно закрывалось при нажатии на Esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            togglerModal();
        }
    });

    //чтоб запускалось через 5 секунд само
    const modalTimerID = setTimeout(togglerModal, 15000);

    // чтоб запускалось при полной прокрутке страницы само
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.
            clientHeight >= document.documentElement.scrollHeight - 1) {
            togglerModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);


    // menu classes
    class MenuItem {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.title = title;
            this.src = src;
            this.alt = alt;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.parentSelector = parentSelector;
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        renderItem() {
            const menuField = document.
                querySelector(this.parentSelector);
            const menuItem = `
                <div class="menu__item">
                        <img src="${this.src}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>
                `;
            menuField.insertAdjacentHTML('beforeend', menuItem);
        }
    }

    const vegi = new MenuItem(
        'img/tabs/vegy.jpg',
        'vegy',
        "Фитнес",
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
        '.menu__field .container'
    );
    vegi.renderItem();

    const elite = new MenuItem(
        'img/tabs/elite.jpg',
        'elite',
        "Премиум",
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550,
        '.menu__field .container'
    );
    elite.renderItem();

    const postnoe = new MenuItem(
        'img/tabs/post.jpg',
        'post',
        "Постное",
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430,
        '.menu__field .container'
    );
    postnoe.renderItem();


});