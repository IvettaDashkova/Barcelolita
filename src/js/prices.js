
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const btnPrev = document.querySelector('.icon-arrow-prev');
const btnNext = document.querySelector('.icon-arrow-next');

const initSwiper = slideData => {
  const swiperPrice = slideData;
const swiper = new Swiper(`[data-id="${swiperPrice}"]`, {
  navigation: {
    nextEl: btnNext,
    prevEl: btnPrev,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper',
  },
  slidesPerView: 1,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },

  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;
      if (window.innerWidth <= 767){
        if (activeIndex === 2) {
          btnPrev.style.fill = '#f9f9f9';
          btnNext.style.fill = 'rgba(249, 249, 249, 0.226)';
        } else if (activeIndex === 1) {
          btnPrev.style.fill = '#f9f9f9';
          btnNext.style.fill = '#f9f9f9';
        }
        else {
          btnPrev.style.fill = 'rgba(249, 249, 249, 0.226)';
          btnNext.style.fill = '#f9f9f9';
        }
      } else {
        if (activeIndex === 1 || activeIndex === 2) {
          btnPrev.style.fill = '#f9f9f9';
          btnNext.style.fill = 'rgba(249, 249, 249, 0.226)';
        } else {
          btnPrev.style.fill = 'rgba(249, 249, 249, 0.226)';
          btnNext.style.fill = '#f9f9f9';
        }
      }
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
      // effect: 'slide', 
      //   fadeEffect: {
      //     crossFade: false, 
      //   },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});
}

initSwiper('price-gallery')

