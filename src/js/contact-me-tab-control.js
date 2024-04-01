const contactMeBackdrop = document.getElementById('contact-me-backdrop');
const modalLastElem = document.querySelector('.socials-contact-me-last-el');
const closeBtn = document.querySelector('.close-btn-contact-me');

contactMeBackdrop.addEventListener('keydown', keydownTabModal);

function keydownTabModal(e) {
  console.dir(e.target);
  if (e.key === 'Tab') {
    if (e.target === modalLastElem) {
      e.preventDefault();
      closeBtn.focus();
    }
  }
}
