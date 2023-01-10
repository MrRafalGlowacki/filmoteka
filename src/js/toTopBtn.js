const toTopBtn = document.querySelector('.to-top');

toTopBtn.addEventListener('click', onTopScroll);

window.addEventListener('scroll', onScrollToTopBtn);

function onScrollToTopBtn() {
  const offsetTrigger = 100;
  const pageOffset = window.pageYOffset;

  pageOffset > offsetTrigger
    ? toTopBtn.classList.remove('is-hidden')
    : toTopBtn.classList.add('is-hidden');
}

function onTopScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
export { onTopScroll };
