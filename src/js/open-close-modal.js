const contactMeBtn = document.getElementById('clickMe');
const backdropModal = document.querySelector('.backdrop-modal-contact-me');
const contactMeCloseBtn = document.querySelector('.close-btn-contact-me');
const contactMeBtnPrice = document.querySelector('.price-contact-btn');

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
  backdropModal.classList.add('is-open');
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
});

contactMeBtn.addEventListener('click', () => {
  backdropModal.classList.add('is-open');
  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
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
