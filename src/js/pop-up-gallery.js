import Swiper from 'swiper';
import {
  Navigation,
  Scrollbar,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../css/layout/pop-up-gallery.css';
import portfolio from './pop-up-gallery.json';

const swiperParams = {
  modules: [Navigation, Scrollbar, EffectCoverflow, Keyboard, Mousewheel],

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 2 },

    1440: {
      slidesPerView: 3,
      spaceBetween: 76,
    },
  },

  effect: 'coverflow',
  // slidesPerView: 3,
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 200,
  //   modifier: 1,
  //   scale: 0.7,
  //   slideShadows: true,
  // },

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    scale: 0.9,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.pop-up-gallery-swiper-btn-next',
    prevEl: '.pop-up-gallery-swiper-btn-prev',
  },

  loop: true,

  centeredSlides: true,

  keyboard: {
    enabled: true,
  },

  mousewheel: true,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
};

const popUpGallerySlider = sliderData => {
  const gallerySlider = sliderData;
  const swiper = new Swiper(`[data-id="${gallerySlider}"]`, swiperParams);

  return swiper;
};

const wrapper = document.querySelector('.swiper-wrapper');
const closeBtn = document.querySelector('.pop-up-gallery-close-btn');
const galleryBackdrop = document.querySelector('.pop-up-gallery-backdrop');
const portfolioList = document.querySelector('.portfolio-list');
const popUpGalleryArrowPrev = document.querySelector(
  '.pop-up-gallery-swiper-arrow-prev'
);
const popUpGalleryArrowNext = document.querySelector(
  '.pop-up-gallery-swiper-arrow-next'
);
const bodyScroll = document.querySelector('body');

// popUpGalleryArrowNext.addEventListener('click', e => {
//   popUpGalleryArrowPrev.style.fill = '#f9f9f9';
// });

closeBtn.addEventListener('click', e => {
  galleryBackdrop.classList.remove('is-open');
  bodyScroll.classList.remove('noscroll');
});

portfolioList.addEventListener('click', e => {
  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H3' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'LI'
  ) {
    let portfolioItemName = e.target.closest('.portfolio-item').dataset.popup;

    console.log(portfolioItemName);
    galleryBackdrop.classList.add('is-open');
    bodyScroll.classList.add('noscroll');

    renderPopUpGallery(portfolio, portfolioItemName);
    popUpGallerySlider('photo');
  }
});
function renderPopUpGallery(portfolio, portfolioItemName) {
  const galleryCurrent = portfolio.find(
    currentType =>
      currentType.nameEn.toLowerCase() === portfolioItemName.toLowerCase()
  );
  //   console.log(galleryCurrent);
  const { nameEn, nameUa, descriptionEn, descriptionUa, img } = galleryCurrent;

  const popUpGalleryTitle = document.querySelector('.pop-up-gallery-title');
  const popUpGalleryText = document.querySelector('.pop-up-gallery-text');
  let languageChange = localStorage.getItem('lang');
  if (languageChange === 'en') {
    popUpGalleryTitle.textContent = nameEn;
    popUpGalleryText.textContent = descriptionEn;
  } else {
    popUpGalleryTitle.textContent = nameUa;
    popUpGalleryText.textContent = descriptionUa;
  }

  const markup = img
    .map(imgItem => {
      return `<div class="swiper-slide swiper-slide-layout">
     <img
        class="pop-up-photo"
        src=${imgItem}
        alt="foto"
      
      />
      
    </div> `;
    })
    .join('');

  wrapper.innerHTML = markup;
}
