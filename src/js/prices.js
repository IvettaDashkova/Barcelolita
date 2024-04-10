
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import { fetchPrice } from './API';
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

export const initPriceSwiper = async lang => {
  const price = await fetchPrice();
  const contentPrice = await renderPrice(price, lang);
  const priceList = document.querySelector('.price-list');
  priceList.innerHTML = contentPrice;
  const swiperPrice = 'price-gallery';
  new Swiper(`[data-id="${swiperPrice}"]`, swiperParamsPrice);

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
      const swiperWrapPrice = document.querySelector('.swiper-wrapper.price-list');
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
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          if (currentIndex === null) {
            currentIndex = 0;
          } else {
            if (
              e.key === 'ArrowRight' &&
              currentIndex < swiperArray.length - 1
            ) {
              prevIndex = currentIndex;
              currentIndex += 1;
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
              prevIndex = currentIndex;
              currentIndex -= 1;
            } else if (
              e.key === 'ArrowRight' &&
              currentIndex === swiperArray.length - 1
            ) {
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

    const swiperSection = document.querySelector('.swiper-container-price');

    function handleIntersect(entries) {
      if (!entries[0].isIntersecting) {
        swiperSlides.forEach(slide => slide.classList.remove('hovered'));
      }
    }

    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(swiperSection);
};



export function renderPrice(price, lang) {
  const chunkSize = 3;
  const chunks = [];

  for (let i = 0; i < price.length; i += chunkSize) {
    chunks.push(price.slice(i, i + chunkSize));
  }

  return chunks
    .map(chunk => {
      return `
    ${
      chunk[0]
        ? `
  <div tabindex="0" class="swiper-slide price first">
          <div class="name-first">${
            lang === 'en' ? chunk[0].titleEn : chunk[0].titleUa
          }</div>
          <div class="number-first number">${
            chunk[0].id < 10 ? `0${chunk[0].id}` : chunk[0].id
          }</div>
          <div class="overlay-dark">
            <p class="text">${
              lang === 'en' ? chunk[0].descriptionEn : chunk[0].descriptionUa
            }</p>
            <p class="price-first">${chunk[0].USD} $ / ${chunk[0].EUR} €</p>
          </div>
        </div>`
        : ''
    }
${
  chunk[1]
    ? `    
        <div tabindex="0" class="swiper-slide price second">
          <div class="name-second">${
            lang === 'en' ? chunk[1].titleEn : chunk[1].titleUa
          }</div>
          <div class="number-second number">${
            chunk[1].id < 10 ? `0${chunk[1].id}` : chunk[1].id
          }</div>
          <div class="overlay-dark">
            <p class="price-second">${chunk[1].USD} $ / ${chunk[1].EUR} €</p>
            <p class="text">${
              lang === 'en' ? chunk[1].descriptionEn : chunk[1].descriptionUa
            }</p>
          </div>
        </div>`
    : ''
}
${
  chunk[2]
    ? `
    <div tabindex="0" class="swiper-slide price third">
          <div class="name-third">${
            lang === 'en' ? chunk[2].titleEn : chunk[2].titleUa
          }</div>
          <div class="number-third number">${
            chunk[2].id < 10 ? `0${chunk[2].id}` : chunk[2].id
          }</div>
          <div class="overlay">
            <p class="text">${
              lang === 'en' ? chunk[2].descriptionEn : chunk[2].descriptionUa
            }</p>
            <p class="price-third">${chunk[2].USD} $ / ${chunk[2].EUR} €</p>
          </div>
        </div>`
    : ''
}
     `;
    })
    .join('');
}


