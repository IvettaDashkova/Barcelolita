import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import team from './team.json';

const swiperParams = {
  modules: [Navigation],
  breakpoints: {
    375: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 50 },
    1440: { slidesPerView: 6, spaceBetween: 50 },
  },
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

new Swiper('.swiper', swiperParams);
const swiperWrapper = document.querySelector('.swiper-wrapper');
// const open = document.querySelector('.open'); // кнопка відкриття модалки
const developerSection = document.querySelector('.developer-section');
const close = document.querySelector('.icon-close');

function toggleModal() {
  const isMenuOpen = developerSection.classList.toggle('is-open');
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

// open.addEventListener('click', toggleModal); // відкриття модалки
close.addEventListener('click', toggleModal);

const createMrkpSwiper = () => {
  const markup = team
    .map(({ src, userName, developer, url }) => {
      return `<div class="swiper-slide">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img">
      <div class="icon-linkedin">
      <a href="${url}" target="_blank"
        >
        <svg class="linkedin" width="16" height="16">
          <use href="../img/icons/symbol.svg#icon-linkedin"></use>
        </svg>
        </a>
      </div>
      <a href="${url}" target="_blank"
        ><img class="dev-photo" src="${src}" alt="${userName}"
      /></a>
    </div>
  </div>
  <h3 class="devName">${userName}</h3>
  <p class="dev">${developer}</p>
  </div>
</div>`;
    })
    .join('');
  return markup;
};

swiperWrapper.innerHTML = createMrkpSwiper();
