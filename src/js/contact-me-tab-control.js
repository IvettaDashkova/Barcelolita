const contactMeBackdrop = document.querySelector('.backdrop-modal-contact-me');
const modalLastElem = document.querySelector('.socials-contact-me-last-el');
const closeBtn = document.querySelector('.close-btn-contact-me');

contactMeBackdrop.addEventListener('keydown', logKey);

function logKey(e) {
  console.dir(e.target);
  if (e.key === 'Tab') {
    if (e.target === modalLastElem) closeBtn.focus();
  }
}
