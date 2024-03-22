import Swiper from 'swiper';
import { Navigation, Scrollbar, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../css/layout/pop-up-gallery.css';
import portfolio from './pop-up-gallery.json';

const swiperParams = {
  modules: [Navigation, Scrollbar, EffectCoverflow],

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 2 },
    // 768: { slidesPerView: 1 },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  effect: 'coverflow',
  slidesPerView: 3,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: '.pop-up-gallery-swiper-arrow-next',
    prevEl: '.pop-up-gallery-swiper-arrow-prev',
  },

  loop: true,

  centeredSlides: true,
  //   centeredSlidesBounds: true,

  keyboard: {
    enabled: true,
  },

  mousewheel: true,

  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
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
closeBtn.addEventListener('click', e => {
  galleryBackdrop.classList.remove('is-open');
});

function renderPopUpGallery(portfolio) {
  const galleryCurrent = portfolio.find(
    currentType => currentType.name === 'LOOKBOOK'
  );

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

renderPopUpGallery(portfolio);
