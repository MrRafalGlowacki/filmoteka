const openBtn = document.querySelector('.footer__authors');
const closeBtn = document.querySelector('.students-modal__close-btn');
const modal = document.querySelector('.data-modal');

// pokaż modal
const showStudents = () => {
  modal.classList.remove('is-hidden');
  
  addEventListener('keydown', clickEscape);
  addEventListener('click', closeByClick);
};
// zamknij modal
const closeStudents = () => {
  modal.classList.add('is-hidden');
 
  removeEventListener('keydown', clickEscape);
  removeEventListener('click', closeByClick);
};
//zamknij na esc
const clickEscape = event => {
  if (event.keyCode === 27) {
    closeStudents();
  }
};
// zamknij na klik poza oknem modalnym
const closeByClick = event => {
  if (
    !event.target.classList.contains('is-hidden') &&
    !event.target.closest('.students-modal') &&
    event.target.className !== 'footer__authors'
  ) {
    closeStudents();
  }
};
openBtn.addEventListener('click', showStudents);
closeBtn.addEventListener('click', closeStudents);
