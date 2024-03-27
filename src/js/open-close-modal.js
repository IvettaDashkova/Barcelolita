const contactMeBtn = document.getElementById('clickMe');
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
  setTimeout(() => {
    contactMeBtn.blur();
    contactMeBtnPrice.blur();
  }, 1000);
}
