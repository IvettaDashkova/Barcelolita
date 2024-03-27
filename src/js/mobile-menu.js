function mobileMenu() {
  const openButton = document.querySelector('.header-burger');
  const backdropMenu = document.querySelector('.mobmenu-backdrop');
  openButton.addEventListener('click', openMenu);
  const closeButton = document.querySelector('.mobmenu-close-button');
  const allSite = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.mobmenu-menu-link');
  const metaTag = document.querySelector('meta');

  history.pushState(
    null,
    null,
    window.top.location.pathname + window.top.location.search
  );
  window.addEventListener('popstate', e => {
    e.preventDefault();
    closeMenu();
    history.pushState(
      null,
      null,
      window.top.location.pathname + window.top.location.search
    );
  });

  function openMenu() {
    metaTag.setAttribute('content', 'user-scalable=no');
    allSite.classList.add('noscroll');
    backdropMenu.classList.add('is-open');
    // backdropMenu.classList.add('mobmenu-visible');
    // const timerId = setTimeout(() => {
    //   backdropMenu.classList.add('is-open');
    // }, 50);
    closeButton.addEventListener('click', closeMenu);
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', closeMenu);
    });
  }

  function closeMenu() {
    metaTag.removeAttribute('content', 'user-scalable=no');
    allSite.classList.remove('noscroll');
    backdropMenu.classList.remove('is-open');
    // const timerId = setTimeout(() => {
    //   backdropMenu.classList.remove('mobmenu-visible');
    // }, 50);
    closeButton.removeEventListener('click', closeMenu);
    menuLinks.forEach(menuLink => {
      menuLink.removeEventListener('click', closeMenu);
    });
  }
}

export default mobileMenu;
