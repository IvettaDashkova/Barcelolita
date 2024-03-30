const goToTopButton = document.getElementById('go-up-btn');

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
}
goToTopButton.addEventListener('click', () => {
  goToTopButton.style.display = 'none';
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
