const contactMeBtn = document.getElementById('clickMe');
const backdropModal = document.querySelector('.backdrop-modal-contact-me');
const contactMeCloseBtn = document.querySelector('.close-btn-contact-me');
const contactMeBtnPrice = document.querySelector('.price-contact-btn');
const bodyScroll = document.querySelector('body');

history.pushState(
  null,
  null,
  window.top.location.pathname + window.top.location.search
);
window.addEventListener('popstate', e => {
  e.preventDefault();
  closePopUpContact();
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
});

contactMeBtnPrice.addEventListener('click', () => {
  openPopUpContact();
});

contactMeBtn.addEventListener('click', () => {
  openPopUpContact();
});

contactMeCloseBtn.addEventListener('click', () => {
  closePopUpContact();
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closePopUpContact();
    focusBtn();
  }
});

function focusBtn() {
  setTimeout(() => {
    contactMeBtn.blur();
    contactMeBtnPrice.blur();
  }, 1000);
}

function closePopUpContact() {
  backdropModal.classList.remove('is-open');
  bodyScroll.classList.remove('noscroll');
}

function openPopUpContact() {
  backdropModal.classList.add('is-open');
  bodyScroll.classList.add('noscroll');
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
}
