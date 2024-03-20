const openButton = document.querySelector('.header-burger');
const backdropMenu = document.querySelector('.mobmenu-backdrop');
openButton.addEventListener('click', openMenu);
const closeButton = document.querySelector('.mobmenu-close-button');

function openMenu() {
  backdropMenu.classList.add('mobmenu-open');
  closeButton.addEventListener('click', closeMenu);
}

function closeMenu() {
  backdropMenu.classList.remove('mobmenu-open');
  closeButton.removeEventListener('click', closeMenu);
}