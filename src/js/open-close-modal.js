const contactMeBtn = document.getElementById('clickMe');
const backdropModal = document.querySelector('.backdrop-modal-contact-me');
const contactMeCloseBtn = document.querySelector('.close-btn-contact-me');
const contactMeBtnPrice = document.querySelector('.price-contact-btn');
const bodyScroll = document.querySelector('body');
let focusElem;

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

contactMeBtnPrice.addEventListener('click', e => {
  openPopUpContact();
  focusElem = e.target;
});

contactMeBtn.addEventListener('click', e => {
  openPopUpContact();
  focusElem = e.target;
});

contactMeCloseBtn.addEventListener('click', () => {
  closePopUpContact();
  focusElem.focus();
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
  setTimeout(() => {
    backdropModal.style.display = 'none';
  }, 1000);
}

function openPopUpContact(e) {
  backdropModal.style.display = 'block';
  setTimeout(() => {
    backdropModal.classList.add('is-open');
    bodyScroll.classList.add('noscroll');
  }, 300);

  document.getElementById('contact-me-backdrop').focus();

  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
}
