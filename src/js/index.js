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
import searchImg from '/images/search.svg'
import cross from '/images/cross.svg'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let { clientWidth } = document.body;
let brandsSlider;
let techSlider;
let priceSlider;


const burgerBtn = document.querySelectorAll('.burger-btn');
burgerBtn.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.burger-menu').classList.toggle('burger-menu--active');
  if (!document.querySelector('.menu__burger-btn--unactive') && !document.querySelector('.menu__burger-btn--active')) {
    document.querySelector('.menu__burger-btn').classList.toggle('menu__burger-btn--unactive');
  }
  document.querySelector('.menu__burger-btn').classList.toggle('menu__burger-btn--active');
  document.querySelector('.menu__burger-btn').classList.toggle('menu__burger-btn--unactive');
}));


const checkBtn = document.querySelectorAll('.feedback__btn');
checkBtn.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.feedback').classList.toggle('feedback--active');
}));


const callBtn = document.querySelectorAll('.call__btn');
callBtn.forEach(elem => elem.addEventListener('click', function () {
  document.querySelector('.call').classList.toggle('call--active');
}));
//Readmore---------------------------------------------------------------------------------

const readmoreBtn = document.querySelectorAll('.readmore');
const readmoreText = document.querySelector('.readmore__text')
readmoreBtn.forEach(elem => elem.addEventListener('click', function () {
  if (clientWidth < 768) {
    document.querySelectorAll('.top-screen__text-first').forEach(elem => elem.classList.toggle('text--unactive'));
    document.querySelectorAll('.top-screen__text-second').forEach(elem => elem.classList.toggle('text--unactive'));
  }
  if (clientWidth >= 768 && clientWidth < 1440) {
    document.querySelectorAll('.top-screen__text-second').forEach(elem => elem.classList.toggle('text--unactive'));
  }
  if (readmoreText.innerText == 'Читать далее') {
    readmoreText.innerText = 'Скрыть';
  }
  else if (readmoreText.innerText == 'Скрыть') { readmoreText.innerText = 'Читать далее' }
}));
//Showmore---------------------------------------------------------------------------------

const showmoreBtn = document.querySelectorAll('.showmore');
showmoreBtn.forEach((elem, i = 0) => elem.addEventListener('click', function () {
  if (i === 0) {
    document.querySelectorAll('.brands__item').forEach(
      elem => elem.classList.toggle('brands__item--visible'));
  }
  if (i === 1) {
    document.querySelectorAll('.tech__item').forEach(
      elem => elem.classList.toggle('tech__item--visible'));
  }
  elem.classList.toggle('showmore--active');
  let showmoreText = elem.querySelectorAll('.showmore__text');
  showmoreText.forEach((text) => {
    if (elem.classList.contains('showmore--active')) {
      text.innerText = 'Скрыть';
    }
    else if (!elem.classList.contains('showmore--active')) {
      text.innerText = 'Показать всё';
    }
  });
}));

const sliderInit = () => {
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
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.price__pagination',
      bulletClass: 'price__pagination-bullet',
      bulletActiveClass: 'price__pagination-bullet--active',
      clickable: true,
    },
  });
}

const resizeHandlerSlider = () => {
  if (clientWidth !== document.body.clientWidth) {
    clientWidth = document.body.clientWidth;
  }
  if (clientWidth < 768) {
    sliderInit();
  }
  else {
    brandsSlider.destroy();
    priceSlider.destroy();
    techSlider.destroy();
  }
}

window.onload = resizeHandlerSlider;
window.onresize = resizeHandlerSlider;