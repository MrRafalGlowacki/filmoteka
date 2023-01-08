const openBtn = document.querySelector('.footer__authors');
const closeBtn = document.querySelector('.students-modal__close-btn');
const modal = document.querySelector('.data-modal');
openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
