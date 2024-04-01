
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const btnPrev = document.querySelector('.icon-arrow-prev');
const btnNext = document.querySelector('.icon-arrow-next');


const swiperParamsPrice = {
  modules: [Navigation, Keyboard, Mousewheel],
  breakpoints: {
    375:{slidesPerView: 1,},
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
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
  speed: 700,
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
}

const initSwiper = slideData => {
  const swiperPrice = slideData;
const swiper = new Swiper(`[data-id="${swiperPrice}"]`, swiperParamsPrice);
}

initSwiper('price-gallery');

document.addEventListener("DOMContentLoaded", function () {
  const swiperSlides = document.querySelectorAll('.swiper-slide.price');

  //логіка ховеру для моб. та таб.

  swiperSlides.forEach(function (slide) {
    if (window.innerWidth <= 1440) {
      slide.addEventListener('click', function () {
        slide.classList.toggle('hovered');
      });
      slide.addEventListener('mouseleave', function () {
        slide.classList.remove('hovered');
      });
    }
  });

//логіка ховеру та перемикання стрілками для десктопу

  if (window.innerWidth >= 1440) {
    const swiperWrapPrice = document.querySelector('.swiper-wrapper.price');
    const swiperArray = Array.from(swiperWrapPrice.children);
    let currentIndex = null;
    let prevIndex = null;

    function addHoverClass(index) {
      swiperArray.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('hovered');
        } else {
          slide.classList.remove('hovered');
        }
      });
    }

    function keydownHandler(e) {
      if ((e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        if (currentIndex === null) {
          currentIndex = 0;
        } else {
          if (e.key === 'ArrowRight' && currentIndex < swiperArray.length - 1) {
            prevIndex = currentIndex;
            currentIndex += 1;
          } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            prevIndex = currentIndex;
            currentIndex -= 1;
          } else if (e.key === 'ArrowRight' && currentIndex === swiperArray.length - 1) {
            prevIndex = swiperArray.length - 1;
            currentIndex = 0;
          } else if (e.key === 'ArrowLeft' && currentIndex === 0) {
            prevIndex = 0;
            currentIndex = swiperArray.length - 1;
          }
        }
        addHoverClass(currentIndex);
      }
    }

    function removeHoveredClass() {
      swiperArray.forEach(slide => slide.classList.remove('hovered'));
    }

    swiperSlides.forEach(function (slide) {
      slide.addEventListener('mouseenter', function () {
        slide.classList.add('hovered');
      });
      slide.addEventListener('mouseleave', function () {
        slide.classList.remove('hovered');
      });
      slide.addEventListener('click', function () {
        slide.classList.remove('hovered');
      });
    });

    window.addEventListener('keydown', keydownHandler);

    window.addEventListener('click', function () {
      removeHoveredClass();
    });
  }

  //видалення ховеру коли секція поза зоною видимості користувача

  const swiperSection = document.querySelector('.container-prices');

  function handleIntersect(entries) {
    if (!entries[0].isIntersecting) {
      swiperSlides.forEach(slide => slide.classList.remove('hovered'));
    }
  }

  const observer = new IntersectionObserver(handleIntersect);
  observer.observe(swiperSection);
});





