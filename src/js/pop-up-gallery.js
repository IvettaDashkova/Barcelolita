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
    // 768: { slidesPerView: 1 },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  effect: 'coverflow',
  //   slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    scale: 0.7,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.pop-up-gallery-swiper-arrow-next',
    prevEl: '.pop-up-gallery-swiper-arrow-prev',
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

popUpGallerySlider('photo');
const wrapper = document.querySelector('.swiper-wrapper');
const closeBtn = document.querySelector('.pop-up-gallery-icon-close');
const galleryBackdrop = document.querySelector('.pop-up-gallery-backdrop');
const portfolioList = document.querySelector('.portfolio-list');
const popUpGalleryArrowPrev = document.querySelector(
  '.pop-up-gallery-swiper-arrow-prev'
);
const popUpGalleryArrowNext = document.querySelector(
  '.pop-up-gallery-swiper-arrow-next'
);

popUpGalleryArrowNext.addEventListener('click', e => {
  popUpGalleryArrowPrev.style.fill = '#f9f9f9';
});

closeBtn.addEventListener('click', e => {
  galleryBackdrop.classList.remove('is-open');
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
    renderPopUpGallery(portfolio, portfolioItemName);
  }
});
function renderPopUpGallery(portfolio, portfolioItemName) {
  const galleryCurrent = portfolio.find(
    currentType =>
      currentType.name.toLowerCase() === portfolioItemName.toLowerCase()
  );
  //   console.log(galleryCurrent);
  const { name, description, img } = galleryCurrent;

  document.querySelector('.pop-up-gallery-title').textContent = name;
  document.querySelector('.pop-up-gallery-text').textContent = description;

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
