const goToTopButton = document.getElementById('go-up-btn');

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 930 ||
    document.documentElement.scrollTop > 930
  ) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
}
goToTopButton.addEventListener('click', () => {
  goToTopButton.style.display = 'none';
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});

export default scrollFunction;
