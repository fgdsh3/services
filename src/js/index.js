import '../scss/styles.scss'
import imgLogo from '/images/logo.svg'
import imgChat from '/images/chat.svg'
import imgCheck from '/images/check.svg'
import imgPerson from '/images/person.svg'
import imgPhone from '/images/phone.svg'
import imgRepair from '/images/repair.svg'
import imgArrowsDown from '/images/arrows-down.svg'
import imgTopscreen from '/images/top-screen-image.jpg'
import lenovoImg from '/images/lenovo.png'
import samsungImg from '/images/samsung.png'
import appleImg from '/images/apple.png'
import viewsonicImg from '/images/viewsonic.png'
import boschImg from '/images/bosch.png'
import hpImg from '/images/hp.png'
import acerImg from '/images/acer.png'
import sonyImg from '/images/sony.svg'
import arrowbtnImg from '/images/arrow-btn.svg'
import gradient from '/images/gradient.png'
import smallArrow from '/images/small-arrow.svg'
import smallArrowRed from '/images/small-arrow-red.svg'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const brandsSlider = new Swiper('.brands__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.brands__pagination',
    bulletClass: 'brands__pagination-bullet',
    bulletActiveClass: 'brands__pagination-bullet--active',
    clickable: true,
  }
});

const techSlider = new Swiper('.tech__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.tech__pagination',
    bulletClass: 'tech__pagination-bullet',
    bulletActiveClass: 'tech__pagination-bullet--active',
    clickable: true,
  },
});

const priceSlider = new Swiper('.price__slider', {
  loopedSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.price__pagination',
    bulletClass: 'price__pagination-bullet',
    bulletActiveClass: 'price__pagination-bullet--active',
    clickable: true,
  },
});

const burger = document.querySelector('.menu__burger-btn');
burger.addEventListener('click', function () {
  if (!document.querySelector('.menu__burger-btn--unactive') && !document.querySelector('.menu__burger-btn--active')) {
    burger.classList.toggle('menu__burger-btn--unactive');
  }
  burger.classList.toggle('menu__burger-btn--active');
  burger.classList.toggle('menu__burger-btn--unactive');
});

/* Promise.all([
  fetch('https://api.example.com/data1'),
  fetch('https://api.example.com/data2')
]).then(responses => {
  // обработка ответов
}); */