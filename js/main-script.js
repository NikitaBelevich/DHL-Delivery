'use strict';


//select2-library
$(document).ready(function() {
    $('.aside-card__form__select').select2();
});
//select2-library


let buttonSelectLanguage = document.querySelector('#button-select-lang');
buttonSelectLanguage.onclick = showListLanguage;

function showListLanguage() {
    let iconArrow = document.querySelector('.language > div > span');
    let listLanguage = document.querySelector('.language-ul');
    iconArrow.classList.toggle('icon-chevron-up-solid');
    if (listLanguage.style.visibility != 'visible') {
        listLanguage.style.cssText = 'opacity: 1; top: 50px; visibility: visible;';
    } else {
        listLanguage.style.cssText = 'opacity: 0; top: -250px; visibility: hidden;';
    }
}

let mobileMenu = document.querySelector('.navigation__menu-wrapper');
let overleyMenu = document.querySelector('.navigation__mobile-overley');
//show menu
let buttonMobileMenu = document.querySelector('.navigation__mobile > input[type=checkbox]');
buttonMobileMenu.onclick = showMenuAndOverley;

function showMenuAndOverley() {
    mobileMenu.classList.toggle('navigation__menu-wrapper_active');
    overleyMenu.classList.toggle('navigation__mobile-overley_active');
    translateButtonMenu();
    hiddenOverflowBody();
}
//show menu
//hide menu
let linksMobileMenu = document.querySelectorAll('ul.menu .links-menu');
for (const elem of linksMobileMenu) {
    elem.onclick = hideMenuAndOverley;
}

function hideMenuAndOverley() {
    mobileMenu.classList.remove('navigation__menu-wrapper_active');
    overleyMenu.classList.remove('navigation__mobile-overley_active');
    translateButtonMenu();
    hiddenOverflowBody();
    buttonMobileMenu.checked = false;
}
//hide menu
function translateButtonMenu() { //добавление класса со сдвигом для кнопки меню на 576px;
    let navigationMobile = document.querySelector('.navigation__mobile');
    navigationMobile.classList.toggle('navigation__mobile_translate');
}
function hiddenOverflowBody(){
    document.body.classList.toggle('hidden-overflow-body');
}

overleyMenu.onclick = function () {
    this.classList.remove('navigation__mobile-overley_active');
    mobileMenu.classList.remove('navigation__menu-wrapper_active');
    translateButtonMenu();
    hiddenOverflowBody();
    buttonMobileMenu.checked = false;
}

// Трансформация иконки-стрелки в ссылке read more
let linksReadMore = document.querySelectorAll('.card__read');

for (const elem of linksReadMore) {
    elem.onmouseenter = function() {
        let attrLinkMore = this.getAttribute('data-icon-link');
        document.querySelector(`a[data-icon-link="${attrLinkMore}"] > .icon-caret-right-solid`).classList.add('read-more-icon_active');
    }
    elem.onmouseleave = function() {
        let attrLinkMore = this.getAttribute('data-icon-link');
        document.querySelector(`a[data-icon-link="${attrLinkMore}"] > .icon-caret-right-solid`).classList.remove('read-more-icon_active');
    }
}
// Трансформация иконки-стрелки в ссылке read more



// section video--------------------------------------------------------------------
//plyr-video-library
const player = new Plyr('#player-plyr', {
    resetOnEnd: true,
    //options
});
//plyr-video-library
// скрытие элементов на видео по клику на плеер
const statementsCards = document.querySelector('.statements-cards');
const controlVideoPanel = document.querySelector('.plyr--video .plyr__controls');
const titleOnVideo =  document.querySelector('.video-about-DHL__title');
const clientWidth = document.documentElement.clientWidth;

document.querySelector('section.video-about-DHL > div > button').addEventListener('click', () => {
    titleOnVideo.classList.toggle('video-about-DHL__title_hidden');

    setTimeout(() => {// зарержка чтобы убрать мелькание панели
        controlVideoPanel.style.cssText = `visibility: visible; z-index: 3;`;
    }, 1000);

    if (clientWidth > 768) {
        statementsCards.classList.toggle('statements-cards_hidden');
    }
});

document.querySelector('section.video-about-DHL .plyr__poster').addEventListener('click', () => {
    titleOnVideo.classList.toggle('video-about-DHL__title_hidden');

    setTimeout(() => {// зарержка чтобы убрать мелькание панели
        controlVideoPanel.style.cssText = `visibility: visible; z-index: 3;`;
    }, 1000);

    if (clientWidth > 768) {
        statementsCards.classList.toggle('statements-cards_hidden');
    }
});
// скрытие элементов на видео по клику на плеер


player.on('ended', event => { // событие API, сработает когда завершится показ видео
    titleOnVideo.classList.remove('video-about-DHL__title_hidden'); // показываем заголовок
    statementsCards.classList.remove('statements-cards_hidden'); // показываем карточки
    controlVideoPanel.style.cssText = `visibility: hidden; z-index: -3;`; // скрываем панель управления
    console.info('end of video playback');
});
// section video--------------------------------------------------------------------

// tabs and accordion
hideTabs(1);
function hideTabs(count) {
    let elementTab = document.querySelectorAll('.wrapper-tabs');
    for (let i = count; i < elementTab.length; i++) {
        elementTab[i].style.display = 'none';
    }
}

const tabButtons = document.querySelectorAll('.tab');
tabButtons.forEach(element => { // показываем контент активного таба
    element.addEventListener('click', showTab);
});

function showTab() {
    hideTabs(0); // скрываем активные ранее вкладки
    let tabAttr = this.getAttribute('data-tab');
    tabButtons.forEach(element => {
        element.classList.remove('tab-active');
    });
    this.classList.add('tab-active'); // добавляем класс активности кнопке
    let currentTabContent = document.querySelector(`.tabs-block-image__tabs > section[data-tab="${tabAttr}"]`);
    currentTabContent.style.display = 'block';
}

showDropdownOnClick();
function showDropdownOnClick() {
    let accordionButtons = document.querySelectorAll('.accordion-open');
    for (const element of accordionButtons) {
        element.addEventListener('click', function () {
            let dataAttrButton = this.getAttribute('data-button-accordion');
            this.classList.toggle('accordion-open_active');

            let dropDown = document.querySelector(`.wrapper-tabs > div[data-dropdown="${dataAttrButton}"]`);
            dropDown.classList.toggle('tabs__dropdown_active');

            if (dropDown.style.height) {
                dropDown.style.height = null;
            } else {
                dropDown.style.height = dropDown.scrollHeight + 34 + "px";
            }
            // смена иконки на активной кнопке
            let iconAccordionButton = document.querySelector(`div[data-button-accordion="${dataAttrButton}"] > .accordion-open__icon > span`);
            iconAccordionButton.classList.toggle('icon-chevron-up-solid');
        });
    }
} 
// tabs and accordion

// Определение времени затраченное на выполнение или загрузку скрипта
// console.time("Execution time took");
// console.timeEnd("Execution time took");
// Определение времени затраченное на выполнение или загрузку скрипта

// Yandex Map API
const accordionButtonYandexMap = document.querySelector('section.wrapper-tabs > div[data-load-YaAPI]');
accordionButtonYandexMap.addEventListener('click', addAPIMapsWrapper);

function addAPIMapsWrapper() {
    addAPIMapsOnRequest('https://api-maps.yandex.ru/2.1/?apikey=290548e9-2a26-42af-81ac-86cef8ca9d7d&lang=ru_RU', generateYaMapsDHL);
}

function addAPIMapsOnRequest(url, func) { // функция загружает API карт по запросу 1 раз
    const scriptYaAPI = document.createElement('script');
    scriptYaAPI.src = url;
    document.head.append(scriptYaAPI); // добавили в head
    accordionButtonYandexMap.removeEventListener('click', addAPIMapsWrapper); // 1 раз загрузили и сняли обработчик подключения API

    scriptYaAPI.onerror = function () {
        console.error(`Loading error: ${this.src}`);
    };
    scriptYaAPI.addEventListener('load', func); // когда API загружен, выполняем нашу настройку для карты
    scriptYaAPI.addEventListener('load', hidePreloaderMap); // API загружен, через 2 секунды скрываем прелоадер
}

// скрывает прелоадер на карте после того как она загружена
function hidePreloaderMap() {
    setTimeout(() => {
        const preloaderMapsInTab = document.querySelector('.tabs__dropdown__preload-wrapper');
        preloaderMapsInTab.style.cssText = `opacity: 0; visibility: hidden;`;
    }, 1800); // задержка чтобы всё отрисовалось
}

function generateYaMapsDHL() {

ymaps.ready(init)
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("dropdown__map", {
            // Порядок по умолчанию: «широта, долгота».
            center: [56.311,43.985],
            // от 0 (весь мир) до 19.
            zoom: 11,
            // controls: ['smallMapDefaultSet'],
        });
        myMap.controls.add('routeButtonControl');
        myMap.behaviors.disable(['rightMouseButtonMagnifier','scrollZoom']);

        var myPlacemark1,
            myPlacemark2,
            myPlacemark3,
            myPlacemark4,
            myPlacemark5,
            myPlacemark6;

            // коллекция для меток с едиными опциями
            var myCollection = new ymaps.GeoObjectCollection({}, {
                iconLayout: 'default#image',
                iconImageHref: '/images/optimize-img/icons/DHL-icon-map.png',
                iconImageSize: [50, 42],
                iconImageOffset: [-10, -38],
            });

            // наши метки
            myPlacemark1 = new ymaps.Placemark([56.326741107418236,44.01116222883605], {
                hintContent: 'DHL Item',
                balloonContent: [
                    '<div class="balloon__title">DHL</div>',
                    '<span class="balloon__description">Courier services, logistics company</span><br>',
                    '<span>Address: ул. Ульянова, 10А</span>'
                ].join(''),

            }, {});
            myPlacemark2 = new ymaps.Placemark([56.33086956839156,43.99595249999997], {
                hintContent: 'DHL Item',
                balloonContent: [
                    '<div class="balloon__title">DHL</div>',
                    '<span class="balloon__description">Courier services, logistics company</span><br>',
                    '<span>Address: Нижне-Волжская наб., 7</span>'
                ].join(''),

            }, {});
            myPlacemark3 = new ymaps.Placemark([56.32389706840361,43.95365949999999], {
                hintContent: 'DHL Item',
                balloonContent: [
                    '<div class="balloon__title">DHL Express Easy</div>',
                    '<span class="balloon__description">Courier services, logistics company</span><br>',
                    '<span>Address: Советская ул., 18</span>'
                ].join(''),

            }, {});
            myPlacemark4 = new ymaps.Placemark([56.25348652720605,43.970040256938915], {
                hintContent: 'DHL Item',
                balloonContent: [
                    '<div class="balloon__title">DHL</div>',
                    '<span class="balloon__description">Courier services, logistics company</span><br>',
                    '<span>Address: просп. Гагарина, 166, этаж 1</span>'
                ].join(''),

            }, {});
            myPlacemark5 = new ymaps.Placemark([56.25416446440327,43.867389703107946], {
                hintContent: 'DHL Item',
                balloonContent: [
                    '<div class="balloon__title">DHL</div>',
                    '<span class="balloon__description">Courier services, logistics company</span><br>',
                    '<span>Address: просп. Октября, 22, микрорайон Соцгород-I</span>'
                ].join(''),

            }, {});
            myPlacemark6 = new ymaps.Placemark([56.34997306708597,43.870560465610424], {
                hintContent: 'DHL Item',
                balloonContent: [
                    '<div class="balloon__title">DHL</div>',
                    '<span class="balloon__description">Courier services, logistics company</span><br>',
                    '<span>Address: ул. Щербакова, 15</span>'
                ].join(''),

            }, {});
            // наши метки

        myCollection
                .add(myPlacemark1)
                .add(myPlacemark2)
                .add(myPlacemark3)
                .add(myPlacemark4)
                .add(myPlacemark5)
                .add(myPlacemark6);
        myMap.geoObjects.add(myCollection);
    }
} 
// Yandex Map API













