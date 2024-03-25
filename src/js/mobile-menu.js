function mobileMenu() {
  const openButton = document.querySelector('.header-burger');
  const backdropMenu = document.querySelector('.mobmenu-backdrop');
  openButton.addEventListener('click', openMenu);
  const closeButton = document.querySelector('.mobmenu-close-button');
  const allSite = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.mobmenu-menu-link');

  function openMenu() {
    allSite.classList.add('noscroll')
    backdropMenu.classList.add('mobmenu-visible');
    const timerId = setTimeout(() => {
      backdropMenu.classList.add('mobmenu-open');
    }, 50);
    closeButton.addEventListener('click', closeMenu);
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', closeMenu);
    })
  }

  function closeMenu() {
    allSite.classList.remove('noscroll')
    backdropMenu.classList.remove('mobmenu-open');
    const timerId = setTimeout(() => {
      backdropMenu.classList.remove('mobmenu-visible');
    }, 50);
    closeButton.removeEventListener('click', closeMenu);
    menuLinks.forEach(menuLink => {
      menuLink.removeEventListener('click', closeMenu);
    })
  }
}

export default mobileMenu;
