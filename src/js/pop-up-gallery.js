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
import '../css/layout/modal.css';
import portfolio from '../constants/pop-up-gallery.json';

const wrapper = document.querySelector('.swiper-wrapper');
const closeBtn = document.querySelector('.pop-up-gallery-close-btn');
const galleryBackdrop = document.querySelector('.pop-up-gallery-backdrop');
const portfolioList = document.querySelector('.portfolio-list');
const popUpGalleryArrowPrev = document.querySelector(
  'pop-up-gallery-swiper-btn-prev'
);
const popUpGalleryArrowNext = document.querySelector(
  '.pop-up-gallery-swiper-btn-next'
);

console.log(popUpGalleryArrowPrev);
const bodyScroll = document.querySelector('body');
let swiper;

const swiperParams = {
  modules: [Navigation, Scrollbar, EffectCoverflow, Keyboard, Mousewheel],

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 2 },

    768: { slidesPerView: 1, spaceBetween: 70 },

    1440: {
      slidesPerView: 2.4,
      spaceBetween: 50,
    },
  },

  effect: 'coverflow',

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

  // on: {
  //   slideChange: function () {
  //     popUpGalleryArrowNext.blur();
  //   },
  // },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
};

const popUpGallerySlider = sliderData => {
  const gallerySlider = sliderData;
  swiper = new Swiper(`[data-id="${gallerySlider}"]`, swiperParams);
};

// popUpGalleryArrowNext.addEventListener('click', e => {
//   popUpGalleryArrowPrev.style.fill = '#f9f9f9';
// });

function closePopUpGallery() {
  galleryBackdrop.classList.remove('is-open');
  bodyScroll.classList.remove('noscroll');
  swiper.destroy(true, true);
}

function keydownClose(event) {
  if (event.key === 'Escape') {
    closePopUpGallery();
  }
}

history.pushState(
  null,
  null,
  window.top.location.pathname + window.top.location.search
);
window.addEventListener('popstate', e => {
  e.preventDefault();
  closePopUpGallery();
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
});

document.addEventListener('keydown', keydownClose);

closeBtn.addEventListener('click', closePopUpGallery);

portfolioList.addEventListener('click', e => {
  if (
    e.target.nodeName === 'IMG' ||
    e.target.nodeName === 'H3' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'BUTTON'
    // e.target.nodeName === 'LI'
  ) {
    let portfolioItemName = e.target.closest('.portfolio-item').dataset.popup;

    galleryBackdrop.classList.add('is-open');
    bodyScroll.classList.add('noscroll');

    renderPopUpGallery(portfolioItemName);
    popUpGallerySlider('photo');
  }
});
function renderPopUpGallery(portfolioItemName) {
  const galleryCurrent = portfolio.find(
    currentType =>
      currentType.nameEn.toLowerCase() === portfolioItemName.toLowerCase()
  );

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
        alt="photo"
        loading="lazy"

      
       />
      
    </div> `;
    })
    .join('');

  wrapper.innerHTML = markup;
}
