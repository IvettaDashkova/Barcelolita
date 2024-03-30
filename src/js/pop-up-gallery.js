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

  centeredSlidesBounds: true,

  keyboard: {
    enabled: true,
  },

  mousewheel: true,
};

const popUpGallerySlider = sliderData => {
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
  const gallerySlider = sliderData;
  swiper = new Swiper(`[data-id="${gallerySlider}"]`, swiperParams);
};

function closePopUpGallery() {
  modalGallery.removeEventListener('transitionend', focusFirstElementGallery);
  modalGallery.removeEventListener('keydown', nextFocusTabGallery);
  galleryBackdrop.classList.remove('is-open');
  bodyScroll.classList.remove('noscroll');
  setTimeout(() => {
    galleryBackdrop.style.display = 'none';
  }, 1000);

  if (!swiper) {
    return;
  } else {
    swiper.destroy(true, true);
  }
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
    e.target.nodeName === 'SPAN' ||
    e.target.nodeName === 'BUTTON'
  ) {
    let portfolioItemName = e.target.closest('.portfolio-item').dataset.popup;

    galleryBackdrop.style.display = 'block';
    setTimeout(() => {
      galleryBackdrop.classList.add('is-open');
      bodyScroll.classList.add('noscroll');
    }, 300);
    modalGallery.addEventListener('transitionend', focusFirstElementGallery);

    modalGallery.addEventListener('keydown', nextFocusTabGallery);
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
const modalGallery = document.querySelector('.tab-js-gallery');

const focusElementsGallery = modalGallery.querySelectorAll(
  'button,[tabindex]:not([tabindex="-1"])'
);
const firstFocusleElementGallery = focusElementsGallery[0];
const lastFocusElementGallery =
  focusElementsGallery[focusElementsGallery.length - 1];

const focusFirstElementGallery = () => {
  firstFocusleElementGallery.focus();
};

const focusLastElementGallery = () => {
  lastFocusElementGallery.focus();
};

function nextFocusTabGallery(event) {
  if (event.key === 'Tab') {
    event.preventDefault();

    if (event.shiftKey) {
      if (document.activeElement === firstFocusleElementGallery) {
        focusLastElementGallery();
      } else {
        focusElementsGallery[
          Array.prototype.indexOf.call(
            focusElementsGallery,
            document.activeElement
          ) - 1
        ].focus();
      }
    } else {
      if (document.activeElement === lastFocusElementGallery) {
        focusFirstElementGallery();
      } else {
        focusElementsGallery[
          Array.prototype.indexOf.call(
            focusElementsGallery,
            document.activeElement
          ) + 1
        ].focus();
      }
    }
  }
}
