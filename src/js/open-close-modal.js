const contactMeBtn = document.querySelector('.js-open-modal');
const backdropModal = document.querySelector('.backdrop-modal-contact-me');
const contactMeCloseBtn = document.querySelector('.close-btn-contact-me');

const contactMeBtnPrice = document.querySelector('.price-contact-btn');

contactMeBtnPrice.addEventListener('click', () => {
  backdropModal.classList.remove('is-hidden');
});
contactMeBtn.addEventListener('click', () => {
  backdropModal.classList.remove('is-hidden');
});

contactMeCloseBtn.addEventListener('click', () => {
  backdropModal.classList.add('is-hidden');
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    backdropModal.classList.add('is-hidden');
    focusBtn();
  }
});

function focusBtn() {
  const contactMeBtn = document.getElementById('clickMe');

  setTimeout(() => {
    contactMeBtn.blur();
  }, 1000);
}

// backdropModal.classList.add('is-hidden');
