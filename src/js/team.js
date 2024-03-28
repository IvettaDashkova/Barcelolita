import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';
import team from '../constants/team.json';
import 'swiper/css/navigation';
import 'swiper/css';
import icons from '../img/icons/symbol.svg';

const swiperParams = {
  modules: [Navigation, Keyboard],
  breakpoints: {
    375: { slidesPerView: 2, spaceBetween: 35 },
    768: { slidesPerView: 3, spaceBetween: 50 },
    1000: { slidesPerView: 4, spaceBetween: 50 },
    1440: { slidesPerView: 6, spaceBetween: 50 },
  },
  navigation: {
    nextEl: '.swiper-button-next-section-team',
    prevEl: '.swiper-button-prev-section-team',
  },
  slidesOffsetAfter: 25,
  slidesOffsetBefore: 10,
  keyboard: {
    enabled: true,
  },
};

const gallerySwiperTeam = photoEl => {
  const photoId = photoEl;
  const swiper = new Swiper(`[data-id="${photoId}"]`, swiperParams);
  const nextEl = document.querySelector('.swiper-button-next-section-team');
  const prevEl = document.querySelector('.swiper-button-prev-section-team');

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      swiper.slideNext();
    }
  });

  return swiper;
};
gallerySwiperTeam('gallery-photo-team');

const swiperWrapper = document.getElementById('team-section-wrapper');
const developerSection = document.querySelector('.developer-section');
const closeModal = document.querySelector('.btn-close');
const openModal = document.querySelector('.team-button');
const bodyScroll = document.querySelector('body');

function openModalTeam() {
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
  bodyScroll.classList.add('noscroll');
  developerSection.classList.add('is-open');
}
function closeModalTeam() {
  bodyScroll.classList.remove('noscroll');
  developerSection.classList.remove('is-open');
}

history.pushState(
  null,
  null,
  window.top.location.pathname + window.top.location.search
);
window.addEventListener('popstate', e => {
  e.preventDefault();

  closeModalTeam();

  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModalTeam();
  }
});

closeModal.addEventListener('click', closeModalTeam);
openModal.addEventListener('click', openModalTeam);

const createMrkpSwiper = () => {
  const markup = team
    .map(
      ({
        small,
        large,
        userNameEn,
        developer,
        url,
        userNameUa,
        ariaLabel,
        imgPng,
      }) => {
        return `<div class="swiper-slide swipe-slide-js">
      <div class="developer-container">
  <div class="container-img">
    <div class="box-img-team">
      
      <a class="link-linkedin-team" href="${url}"  target="_blank" aria-label="${ariaLabel}"
        >
        <svg class="linkedin" width="16" height="16">
          <use href="${icons}#icon-linkedin"></use>
        </svg>
        </a>
      
      <a href="${url}" target="_blank" aria-label="${ariaLabel}"
        >
<picture>
  <source
    media="(min-width: 768px )"
    srcset="
      team_img/${small}    1x,
      team_img/${large} 2x
    "
    type="image/webp"
  />
  <source
    media="(max-width: 767.98px)"
    srcset="
      team_img/${small}    1x,
      team_img/${large} 2x
    "
    type="image/webp"
  />
  <img
    class="dev-photo"
    src="team_img/${imgPng}"
    alt="${userNameEn}"
  />
</picture>
        </a>
    </div>
  </div>
  <h3 class="dev-name" data-ua="${userNameUa}" data-en="${userNameEn}">${userNameEn}</h3>
  <p class="dev-desription" >${developer}</p>
  </div>
</div>`;
      }
    )
    .join('');
  return markup;
};

swiperWrapper.innerHTML = createMrkpSwiper();
