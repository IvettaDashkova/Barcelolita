const contactMeBtn = document.querySelector('.js-open-modal');
const backdropModal = document.querySelector('.backdrop-modal-contact-me');
const contactMeCloseBtn = document.querySelector('.close-btn-contact-me')

contactMeBtn.addEventListener('click', () => {
    backdropModal.classList.remove('is-hidden');
});

contactMeCloseBtn.addEventListener('click', () => {
    backdropModal.classList.add('is-hidden');
});
