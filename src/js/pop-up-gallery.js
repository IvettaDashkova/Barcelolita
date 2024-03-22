import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import portfolio from './pop-up-gallery.json';

const swiperParams = {
  modules: [Navigation, Scrollbar],

  //   breakpoints: {
  //     375: { slidesPerView: 1 },
  //     768: { slidesPerView: 1 },
  //     1440: { slidesPerView: 3, spaceBetween: 56 },
  //   },

  navigation: {
    nextEl: '.pop-up-gallery-swiper-arrow-next',
    prevEl: '.pop-up-gallery-swiper-arrow-prev',
  },

  loop: true,

  //   effect: 'coverflow',
  //   coverflowEffect: {
  //     rotate: 30,
  //     slideShadows: false,
  //   },
  centeredSlides: true,

  keyboard: {
    enabled: true,
  },

  mousewheel: true,

  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
};
const swiper = new Swiper('.swiper', swiperParams);

const wrapper = document.querySelector('.swiper-wrapper');
const closeBtn = document.querySelector('.pop-up-gallery-icon-close');

function renderPopUpGallery(portfolio) {
  const galleryCurrent = portfolio.find(
    currentType => currentType.name === 'LOOKBOOK'
  );

  const { name, description, img } = galleryCurrent;

  const markup = img
    .map(imgItem => {
      return `<div class="swiper-slide">
     <img
        class="pop-up-foto"
        src=${imgItem}
        alt="foto"
        width="343"
        height="507"
      />
    <h3 class="pop-up-gallery-title">${name}</h3>
      <p class="pop-up-gallery-text">
        ${description}
      </p>
    </div> `;
    })
    .join('');

  wrapper.innerHTML = markup;
}

renderPopUpGallery(portfolio);
