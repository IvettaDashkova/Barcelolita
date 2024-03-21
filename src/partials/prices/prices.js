
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
// init Swiper:
const btnPrev = document.querySelector('.icon-arrow-prev');
const btnNext = document.querySelector('.icon-arrow-next');
const swiperSlides = document.querySelectorAll('.swiper-slide');
// const click = document.querySelector('.click');
// const content = document.querySelector('.content');
import 'animate.css';



const swiper = new Swiper('.swiper', {
  
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
    
  },
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;

      if (activeIndex === 1 || activeIndex === 2) {
        btnPrev.style.fill = '#f9f9f9';
      } else {
        btnPrev.style.fill = 'rgba(249, 249, 249, 0.226)';
      }

      if (activeIndex === 0 || activeIndex === 1) {
        btnNext.style.fill = '#f9f9f9';
      } else {
        btnNext.style.fill = 'rgba(249, 249, 249, 0.226)';
      }
    }
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
  effect: 'fade',
  fadeEffect: { 
    crossFade: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 16,
      effect: 'slide',
    },
      on: {
        slideChange: function () {
          const activeIndex = this.activeIndex;
          if (activeIndex === 0) {
            btnPrev.style.fill = 'rgba(249, 249, 249, 0.226)';
            btnNext.style.fill = '#f9f9f9';
          } else if (activeIndex === 1) {
            btnPrev.style.fill = '#f9f9f9';
            btnNext.style.fill = '#f9f9f9';
          } else {
            btnPrev.style.fill = '#f9f9f9';
            btnNext.style.fill = 'rgba(249, 249, 249, 0.226)';
          }
        }
    },

  },
});

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



