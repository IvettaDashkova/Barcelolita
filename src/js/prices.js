
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const btnPrev = document.querySelector('.icon-arrow-prev');
const btnNext = document.querySelector('.icon-arrow-next');
const swiperSlides = document.querySelectorAll('.swiper-slide');

const initSwiper = slideData => {
  const swiperPrice = slideData;
const swiper = new Swiper(`[data-id="${swiperPrice}"]`, {
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
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

swiperSlides.forEach(slide => {
  slide.addEventListener('click', () => { 
    const click = slide.querySelector('.overlay-click');
    const number = slide.querySelector('.number');
    
    click.classList.toggle('active');
    number.style.display = (click.classList.contains('active')) ? 'none' : '';
    
  });
});


// swiperSlides.forEach((slide, index) => {
//   slide.addEventListener('click', () => {
//     slide.classList.toggle('active');
//   });
// });

// swiperSlides.forEach(slide => {
//   slide.addEventListener('click', () => {
//     const click = slide.querySelector('.click');
//     click.classList.add('card-flipped');
//     click.style.opacity = '1';
//     click.style.visibility = 'visible';
//     const content = slide.querySelector('.content');
//     content.style.display = 'none';
//     setTimeout(() => {
//       const flipped = slide.querySelector('.card-flipped');
//       flipped.style.transform = 'none';
//     }, 400)
//   });
// });


// swiperSlides.forEach(slide => {
//   const content = slide.querySelector('.content');
//   const click = slide.querySelector('.click');
//   slide.addEventListener('click', () => {
//     content.style.display = 'flex';
//     content.style.opacity = '1';
//     click.classList.add('animate__animated', 'animate__flipOutY');
//     click.style.opacity = '0';
//     click.style.visibility = 'hidden';
//   })
// });

// swiperSlides.forEach(slide => {
//   const content = slide.querySelector('.content');
//   const click = slide.querySelector('.click');
  
//   slide.addEventListener('click', () => {
//     if (content.style.display === 'flex') {
//       content.style.display = 'none';
//       content.style.opacity = '0';
//       click.classList.add('animate__animated', 'animate__flipInY');
//       click.style.opacity = '1';
//       click.style.visibility = 'visible';
//     } else {
//       content.style.display = 'flex';
//       content.style.opacity = '1';
//       click.classList.add('animate__animated', 'animate__flipOutY');
//       click.style.opacity = '0';
//       click.style.visibility = 'hidden';
//     }
//   })
// });

// swiperSlides.forEach(slide => {
//   const content = slide.querySelector('.content');
//   const click = slide.querySelector('.click');
//   slide.addEventListener('click', () => {
//     content.style.display = 'none';
//     content.style.opacity = '0';
//     click.classList.add('animate__animated', 'animate__flipInY');
//     click.style.opacity = '1';
//     click.style.visibility = 'visible';
//   })
// });



